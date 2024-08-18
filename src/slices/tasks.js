import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from 'constants'
import * as ports from 'ports'
import * as slices from 'slices'

const syncWithServer = reduxjsToolkit.createAsyncThunk(
  'tasks/syncWithServer',
  async (_, o) => {
    const state = o.getState()
    const userId = state.page.userId
    const jwtToken = state.page.jwtToken
    const {tasksData} = await ports.fetchGetHaxTasksUserid({userId, jwtToken})
    return {tasksData}
  },
)
const setStatusToPending = reduxjsToolkit.createAsyncThunk(
  'tasks/setStatusToPending',
  async ({taskId}) => ({taskId}),
)
const triggerPendingAction = reduxjsToolkit.createAsyncThunk(
  'tasks/triggerPendingAction',
  async ({actionUrl}, o) => {
    const res = await fetch(actionUrl, {method: 'get'})
    const {success} = await res.json()
    if (success) {
      o.dispatch(syncWithServer())
      o.dispatch(slices.userSlice.thunks.syncWithServer())
    }
  },
)
const triggerClaim = reduxjsToolkit.createAsyncThunk(
  'tasks/triggerClaim',
  async ({taskId}, o) => {
    const state = o.getState()
    const userId = state.page.userId
    const jwtToken = state.page.jwtToken
    await ports.fetchPostHaxClaimTasks({userId, taskId, jwtToken})
    o.dispatch(syncWithServer())
    o.dispatch(slices.userSlice.thunks.syncWithServer())
  },
)
const addSyntheticThreshold = reduxjsToolkit.createAsyncThunk(
  'tasks/addSyntheticThreshold',
  ({taskId}) => ({taskId}),
)
const cleanSyntheticThreshold = reduxjsToolkit.createAsyncThunk(
  'tasks/cleanSyntheticThreshold',
  () => {},
)

export const tasksSlice = reduxjsToolkit.createSlice({
  name: 'tasks',
  initialState: {
    status: constants.status.idle,
    tasksData: null,
    loading: false,
    syntheticThresholdMillisMap: {},
  },
  extraReducers(builder) {
    builder
      .addCase(syncWithServer.fulfilled, (state, {payload: {tasksData}}) => {
        state.status = constants.status.success
        state.tasksData = tasksData
      })
      .addCase(syncWithServer.rejected, state => {
        state.status = constants.status.failed
      })
    builder.addCase(
      setStatusToPending.fulfilled,
      (state, {payload: {taskId}}) => {
        state.tasksData = state.tasksData.map(t => ({
          ...t,
          status: t.id === taskId ? 'pending' : t.status,
        }))
      },
    )
    builder
      .addCase(triggerClaim.pending, state => {
        state.loading = true
      })
      .addCase(triggerClaim.fulfilled, state => {
        state.loading = false
      })
      .addCase(triggerClaim.rejected, state => {
        state.loading = false
      })
    builder
      .addCase(triggerPendingAction.pending, (state, action) => {
        const {
          meta: {
            arg: {taskId},
          },
        } = action
        state.tasksData = state.tasksData.map(t => ({
          ...t,
          status: t.id === taskId ? 'pending' : t.status,
        }))
      })
      .addCase(triggerPendingAction.rejected, (state, action) => {
        const {
          meta: {
            arg: {taskId},
          },
        } = action
        state.tasksData = state.tasksData.map(t => ({
          ...t,
          status: t.id === taskId ? 'started' : t.status,
        }))
      })
    builder.addCase(
      addSyntheticThreshold.fulfilled,
      (state, {payload: {taskId}}) => {
        state.syntheticThresholdMillisMap[taskId] = Date.now() + 20_000
      },
    )
    builder.addCase(cleanSyntheticThreshold.fulfilled, state => {
      state.syntheticThresholdMillisMap = {}
    })
  },
})
tasksSlice.selectors = {tasks: state => state.tasks}
tasksSlice.thunks = {
  syncWithServer,
  setStatusToPending,
  triggerClaim,
  triggerPendingAction,
  addSyntheticThreshold,
  cleanSyntheticThreshold,
}
