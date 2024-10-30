import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from '@/constants'
import * as ports from '@/ports'
import * as slices from '@/slices'

const syncWithServer = reduxjsToolkit.createAsyncThunk(
  'events/syncWithServer',
  async (_, o) => {
    const state = o.getState()
    const userId = state.page.userId
    const jwtToken = state.page.jwtToken

    const { tasksData } = await ports.fetchGetPromoEventsTasks({ userId, jwtToken })

    return { tasksData }
  },
)
const setStatusToPending = reduxjsToolkit.createAsyncThunk(
  'events/setStatusToPending',
  async ({taskId}) => ({taskId}),
)
const triggerPendingAction = reduxjsToolkit.createAsyncThunk(
  'events/triggerPendingAction',
  async ({actionUrl}, o) => {
    const state = o.getState()
    const jwtToken = state.page.jwtToken
    const res = await fetch(actionUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    });
    const {success} = await res.json()

    if (success) {
      o.dispatch(syncWithServer())
      o.dispatch(slices.userSlice.thunks.syncWithServer())
    }
  },
)
const addSyntheticThreshold = reduxjsToolkit.createAsyncThunk(
  'events/addSyntheticThreshold',
  ({taskId}) => ({taskId}),
)
const cleanSyntheticThreshold = reduxjsToolkit.createAsyncThunk(
  'events/cleanSyntheticThreshold',
  () => {
  },
)
export const eventsSlice = reduxjsToolkit.createSlice({
  name: 'events',
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
        state.promoTasks = tasksData
      })
      .addCase(syncWithServer.rejected, state => {
        state.status = constants.status.failed
      })
    builder.addCase(
      setStatusToPending.fulfilled,
      (state, {payload: {taskId}}) => {
        state.promoTasks = state.promoTasks.map(t => ({
          ...t,
          status: t.id === taskId ? 'pending' : t.status,
        }))
      },
    )
    builder
      .addCase(triggerPendingAction.pending, (state, action) => {
        const {
          meta: {
            arg: {taskId},
          },
        } = action
        state.promoTasks = state.promoTasks.map(t => ({
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
        state.promoTasks = state.promoTasks.map(t => ({
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
eventsSlice.selectors = {
  promoTasks: state => state.promoTasks,
}
eventsSlice.thunks = {
  syncWithServer,
  setStatusToPending,
  triggerPendingAction,
  addSyntheticThreshold,
  cleanSyntheticThreshold,
}
