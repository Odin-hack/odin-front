import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from '@/constants'
import * as ports from '@/ports'

const syncWithServer = reduxjsToolkit.createAsyncThunk(
  'user/syncWithServer',
  (_, o) => {
    if (o.getState().user.userReqsAmount > 1) {
      return {idle: true}
    }
    const userId = o.getState().page.userId
    const jwtToken = o.getState().page.jwtToken
    const fullName = o.getState().page.fullName
    const friendId = o.getState().page.friendId
    return ports.fetchGetHaxUsersUserid({userId, jwtToken, fullName, friendId})
  },
)
const updateUser = reduxjsToolkit.createAsyncThunk(
  'user/updateUser',
  ({account = null, timer = null, userData = null}) => ({
    account,
    timer,
    userData,
  }),
)
const setStatusToUpdate = reduxjsToolkit.createAsyncThunk(
  'user/setStatusToUpdate',
  () => {
  },
)

export const userSlice = reduxjsToolkit.createSlice({
  name: 'user',
  initialState: {
    status: constants.status.idle,
    failMessage: null,
    userData: null,
    userReqsAmount: 0,
  },
  extraReducers(builder) {
    builder
      .addCase(syncWithServer.pending, state => {
        state.userReqsAmount += 1
      })
      .addCase(
        syncWithServer.fulfilled,
        (state, {payload: {userData, idle}}) => {
          if (idle) {
            return
          }
          state.status = constants.status.success
          state.userData = userData
          state.userReqsAmount -= 1
        },
      )
      .addCase(syncWithServer.rejected, state => {
        state.status = constants.status.failed
        state.userReqsAmount -= 1
      })
    builder.addCase(
      updateUser.fulfilled,
      (state, {payload: {account, timer, userData}}) => {
        state.status = constants.status.success
        if (account !== null) {
          state.userData.accounts.find(
            t => t.accountType === account.accountType,
          ).balance = account.balance
        }
        if (timer !== null) {
          state.userData.timers.find(
            t => t.timerType === timer.timerType,
          ).expireAt = timer.expireAt
        }
        if (userData !== null) {
          state.userData = userData
        }
      },
    )
    builder.addCase(setStatusToUpdate.fulfilled, state => {
      state.status = constants.status.toUpdate
    })
  },
})
userSlice.selectors = {
  user: state => state.user,
  amountToken: state =>
    state.user.userData.accounts.find(t => t.accountType === 'token')
      ?.balance ?? 0,
  amountKeys: state =>
    state.user.userData.accounts.find(t => t.accountType === 'key')?.balance ??
        0,
  claimKeyExpireAt: state =>
    state.user.userData.timers.find(t => t.timerType === 'claim_key')
      ?.expireAt ?? null,
  onboardedModalShowed: state =>
    state.user?.userData?.onboardedModalShow ?? true,
}
userSlice.thunks = {syncWithServer, updateUser, setStatusToUpdate}
