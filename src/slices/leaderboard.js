import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from 'constants'
import * as ports from 'ports'

const syncWithServer = reduxjsToolkit.createAsyncThunk(
  'leaderboard/syncWithServer',
  async (_, o) => {
    const userId = o.getState().page.userId
    const jwtToken = o.getState().page.jwtToken
    const {leaderboardData} = await ports.fetchGetHaxLeaderboardList({
      userId,
      jwtToken,
    })
    return {leaderboardData}
  },
)

export const leaderboardSlice = reduxjsToolkit.createSlice({
  name: 'leaderboard',
  initialState: {status: constants.status.idle, leaderboardData: null},
  extraReducers(builder) {
    builder
      .addCase(
        syncWithServer.fulfilled,
        (state, {payload: {leaderboardData}}) => {
          state.status = constants.status.success
          state.leaderboardData = leaderboardData
        },
      )
      .addCase(syncWithServer.rejected, state => {
        state.status = constants.status.failed
        state.leaderboardData = null
      })
  },
})
leaderboardSlice.selectors = {leaderboard: state => state.leaderboard}
leaderboardSlice.thunks = {syncWithServer}
