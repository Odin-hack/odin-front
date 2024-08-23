import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from '@/constants'
import * as ports from '@/ports'
import * as slices from '@/slices'
import * as components from '@/components'

const syncWithServer = reduxjsToolkit.createAsyncThunk(
  'friends/syncWithServer',
  async (_, o) => {
    const state = o.getState()
    const userId = state.page.userId
    const jwtToken = state.page.jwtToken
    const offset = 0
    const limit = state.friends.friendsListLimit
    const {friendsData} = await ports.fetchGetHaxFriendsUserid({
      userId,
      offset,
      limit,
      jwtToken,
    })
    return {friendsData}
  },
)
const loadNextFriendsListPart = reduxjsToolkit.createAsyncThunk(
  'friends/loadNextFriendsListPart',
  async (_, o) => {
    const state = o.getState()
    if (state.friends.paginationReqsAmount > 1) {
      return {idle: true}
    }
    const userId = state.page.userId
    const jwtToken = state.page.jwtToken
    const offset = state.friends.friendsListOffset
    const limit = state.friends.friendsListLimit
    const {friendsData} = await ports.fetchGetHaxFriendsUserid({
      userId,
      offset,
      limit,
      jwtToken,
    })
    return {friendsData}
  },
)
const triggerClaim = reduxjsToolkit.createAsyncThunk(
  'friends/triggerClaim',
  async (_, o) => {
    const userId = o.getState().page.userId
    const jwtToken = o.getState().page.jwtToken
    await ports.fetchPostHaxClaimFriends({userId, jwtToken})
    o.dispatch(syncWithServer())
    o.dispatch(slices.userSlice.thunks.setStatusToUpdate())
  },
)
const resetPagination = reduxjsToolkit.createAsyncThunk(
  'friends/resetPagination',
  () => {},
)

const initialPaginationState = {
  friendsListOffset: 0,
  friendsListLimit: 10,
}

export const friendsSlice = reduxjsToolkit.createSlice({
  name: 'friends',
  initialState: {
    status: constants.status.idle,
    loading: false,
    friendsData: null,
    paginationReqsAmount: 0,
    ...initialPaginationState,
  },
  extraReducers(builder) {
    builder
      .addCase(syncWithServer.fulfilled, (state, {payload: {friendsData}}) => {
        state.status = constants.status.success
        state.friendsListOffset = state.friendsListLimit
        state.friendsData = friendsData
      })
      .addCase(syncWithServer.rejected, state => {
        state.status = constants.status.failed
      })
    builder
      .addCase(loadNextFriendsListPart.pending, state => {
        state.paginationReqsAmount += 1
      })
      .addCase(
        loadNextFriendsListPart.fulfilled,
        (state, {payload: {friendsData, idle}}) => {
          state.paginationReqsAmount -= 1
          if (idle) {
            return
          }
          state.friendsListOffset += state.friendsListLimit
          state.friendsData = {
            ...friendsData,
            friends: [...state.friendsData.friends, ...friendsData.friends],
          }
        },
      )
      .addCase(loadNextFriendsListPart.rejected, state => {
        state.paginationReqsAmount -= 1
      })
    builder
      .addCase(triggerClaim.pending, state => {
        state.loading = true
      })
      .addCase(triggerClaim.fulfilled, state => {
        state.loading = false
      })
      .addCase(triggerClaim.rejected, state => {
        state.loading = false
        const m = `Failed to claim friends rewards. Please contact support.`
        components.toast.showText(m)
      })
    builder.addCase(resetPagination.fulfilled, state => {
      state.friendsListLimit = initialPaginationState.friendsListLimit
      state.friendsListOffset = initialPaginationState.friendsListOffset
    })
  },
})
friendsSlice.selectors = {friends: state => state.friends}
friendsSlice.thunks = {
  syncWithServer,
  loadNextFriendsListPart,
  triggerClaim,
  resetPagination,
}
