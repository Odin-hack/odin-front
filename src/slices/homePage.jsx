import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from '@/constants'
import * as components from '@/components'
import * as ports from '@/ports'
import * as slices from '@/slices'
import * as lib from '@/lib'

const syncGameRewardsWithServer = reduxjsToolkit.createAsyncThunk(
  'home/syncGameRewardsWithServer',
  (_, o) => {
    if (o.getState().homePage.rewardsReqsAmount > 1) {
      return {idle: true}
    }
    const jwtToken = o.getState().page.jwtToken
    return ports.fetchGetHaxGameRewards({jwtToken})
  },
)
const initialize = reduxjsToolkit.createAsyncThunk(
  'home/initialize',
  async (_, o) => {
    const state = o.getState()
    if (state.user.status !== constants.status.success) {
      o.dispatch(slices.userSlice.thunks.syncWithServer())
    }
    if (state.homePage.rewardsLoadStatus !== constants.status.success) {
      o.dispatch(syncGameRewardsWithServer())
    }
  },
)

export const verifyAddressExists = reduxjsToolkit.createAsyncThunk(
  'home/verifyAddressExists',
  async ({ address, network }, o) => {
    const state = o.getState()
    const userId = state.page.userId
    const jwtToken = state.page.jwtToken

    const {isAddressExists} = await ports.fetchGetHaxCheckAddressExists({
      userId,
      jwtToken,
      address,
    })

    if (!isAddressExists) {
      await o.dispatch(
        registerWallet({address, network})
      )
    }

    return {isAddressExists}
  }
)

const registerWallet = reduxjsToolkit.createAsyncThunk(
  'home/registerWallet',
  async ({address, network}, o) => {
    const {balance, txCount} = await ports.fetchTxCountAndBalance({address, network})
    const userId = o.getState().page.userId
    const forRegisterBody = {
      balance,
      network,
      walletType: network,
      txCount,
      address,
    }
    const jwtToken = o.getState().page.jwtToken
    const {registerData} = await ports.fetchPostHaxUsersUserIdWalletRegister({
      body: forRegisterBody,
      userId,
      jwtToken,
    })
    for (const account of registerData.accounts) {
      o.dispatch(slices.userSlice.thunks.updateUser({account}))
    }
    return {registerData, forRegisterBody}
  },
)
const triggerClaim = reduxjsToolkit.createAsyncThunk(
  'home/triggerClaim',
  async (_, o) => {
    const userId = o.getState().page.userId
    const jwtToken = o.getState().page.jwtToken
    const {account, timer} = await ports.fetchPostHaxClaimKeys({
      userId,
      jwtToken,
    })
    o.dispatch(slices.userSlice.thunks.updateUser({account, timer}))
  },
)
const setPhase = reduxjsToolkit.createAsyncThunk(
  'home/setPhase',
  async ({phase}) => ({phase}),
)
const triggerUseKeyToSpin = reduxjsToolkit.createAsyncThunk(
  'home/triggerUseKeyToSpin',
  async (_, o) => {
    const userId = o.getState().page.userId
    const jwtToken = o.getState().page.jwtToken
    const {accounts, nextSpingReward} = await lib.race(
      ports.fetchPostHaxGameSpin({userId, jwtToken}),
    )
    return {accounts, nextSpingReward}
  },
)
const applyUseKeyToSpinEndVals = reduxjsToolkit.createAsyncThunk(
  'home/applyUseKeyToSpinEndVals',
  (_, o) => {
    const accounts = o.getState().homePage.spinEndAccountsUpdates
    for (const [accountType, balance] of Object.entries(accounts)) {
      const account = {accountType, balance}
      o.dispatch(slices.userSlice.thunks.updateUser({account}))
    }
  },
)
const closeRewardsModal = reduxjsToolkit.createAsyncThunk(
  'home/closeRewardsModal',
  () => {},
)
const closeOnboardingModal = reduxjsToolkit.createAsyncThunk(
  'home/closeOnboardingModal',
  async (_, o) => {
    const userId = o.getState().page.userId
    const jwtToken = o.getState().page.jwtToken
    await Promise.all([
      // HACK: exists to finish modal dissapearing animation
      new Promise(r => setTimeout(r, 200)),
      ports.fetchPostHaxUsersUserid({
        userId,
        jwtToken,
        p: {onboardedModalShow: true},
      }),
    ])
    const {userData} = await ports.fetchGetHaxUsersUserid({userId, jwtToken})
    o.dispatch(slices.userSlice.thunks.updateUser({userData}))
  },
)

export const homePageSlice = reduxjsToolkit.createSlice({
  name: 'homePage',
  initialState: {
    isSpinnerOpen: false,
    nextSpingReward: null,
    spinEndAccountsUpdates: null,
    phase: 'landing',
    registerData: null,
    forRegisterBody: null,
    isOpenRewardModal: false,
    rewardsReqsAmount: 0,
    rewardsLoadStatus: constants.status.idle,
    ignoreOnboardingModalInCurrentRun: false,
  },
  extraReducers(builder) {
    builder
      .addCase(verifyAddressExists.pending, (state) => {
        state.isCheckingAddressExists = true;
      })
      .addCase(verifyAddressExists.fulfilled, (state, { payload: { isAddressExists } }) => {
        state.isCheckingAddressExists = false;
        state.isAddressExists = isAddressExists;
      })
      .addCase(verifyAddressExists.rejected, (state) => {
        state.isCheckingAddressExists = false;
        state.isAddressExists = null;
      })
    builder
      .addCase(registerWallet.pending, (state) => {
        state.isSpinnerOpen = true
      })
      .addCase(
        registerWallet.fulfilled,
        (state, {payload: {registerData, forRegisterBody}}) => {
          state.isSpinnerOpen = false
          state.isOpenRewardModal = true
          state.forRegisterBody = forRegisterBody
          state.registerData = registerData
          const rewardExists =
            registerData?.keys > 0 || registerData?.tokens > 0
          if (rewardExists) {
            state.isOpenRewardModal = true
          }
        },
      )
      .addCase(registerWallet.rejected, state => {
        state.isSpinnerOpen = false
      })
    builder
      .addCase(triggerClaim.pending, (state) => {
        state.isSpinnerOpen = true
      })
      .addCase(triggerClaim.fulfilled, (state) => {
        state.isSpinnerOpen = false
      })
      .addCase(triggerClaim.rejected, (state) => {
        state.isSpinnerOpen = false
        const m = 'Server is under load. Please write to support.'
        components.toast.showText(m)
      })
    builder.addCase(setPhase.fulfilled, (state, {payload: {phase}}) => {
      state.phase = phase
    })
    builder
      .addCase(triggerUseKeyToSpin.pending, (state) => {
        state.isSpinnerOpen = true
      })
      .addCase(
        triggerUseKeyToSpin.fulfilled,
        (state, {payload: {accounts, nextSpingReward}}) => {
          state.isSpinnerOpen = false
          state.phase = 'spinning'
          state.spinEndAccountsUpdates = accounts
          state.nextSpingReward = nextSpingReward
        },
      )
      .addCase(triggerUseKeyToSpin.rejected, (state) => {
        state.isSpinnerOpen = false
        const m = 'Server is under load. Please write to support.'
        components.toast.showText(m)
      })
    builder.addCase(applyUseKeyToSpinEndVals.fulfilled, (state) => {
      state.spinEndAccountsUpdates = null
      state.nextSpingReward = null
    })
    builder.addCase(closeRewardsModal.fulfilled, state => {
      state.isOpenRewardModal = false
      state.registerData = null
      state.forRegisterBody = null
    })
    builder
      .addCase(closeOnboardingModal.pending, state => {
        state.isSpinnerOpen = true
      })
      .addCase(closeOnboardingModal.fulfilled, state => {
        state.isSpinnerOpen = false
      })
      .addCase(closeOnboardingModal.rejected, state => {
        state.isSpinnerOpen = false
      })
    builder
      .addCase(syncGameRewardsWithServer.pending, state => {
        state.rewardsReqsAmount += 1
      })
      .addCase(
        syncGameRewardsWithServer.fulfilled,
        (state, {payload: {idle, gameRewardsData}}) => {
          if (idle) {
            return
          }
          state.rewardsLoadStatus = constants.status.success
          state.gameRewardsData = gameRewardsData
          state.rewardsReqsAmount -= 1
        },
      )
      .addCase(syncGameRewardsWithServer.rejected, state => {
        state.rewardsLoadStatus = constants.status.failed
        state.rewardsReqsAmount -= 1
      })
  },
})
homePageSlice.selectors = {
  homePage: state => state.homePage,
  phase: state => state.homePage.phase,
  isSpinnerOpen: state => state.homePage.isSpinnerOpen,
  nextSpingReward: state => state.homePage.nextSpingReward,
  rewards: state => state.homePage.gameRewardsData,
}
homePageSlice.thunks = {
  setPhase,
  initialize,
  verifyAddressExists,
  registerWallet,
  triggerClaim,
  triggerUseKeyToSpin,
  applyUseKeyToSpinEndVals,
  closeRewardsModal,
  closeOnboardingModal,
}
