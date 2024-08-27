import WebApp from '@twa-dev/sdk'
import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from '@/constants'
import * as ports from '@/ports'

let authPromise = null;

const initialize = reduxjsToolkit.createAsyncThunk(
  'page/initialize',
  async (_, {getState}) => {
    const state = getState();
    if (state.page.isAuthenticated) {
      return {userId: state.page.userId, jwtToken: state.page.jwtToken, fullName: state.page.fullName, friendId: state.page.friendId};
    }

    // Если запрос уже выполняется, ждем его завершения
    if (authPromise) {
      return authPromise;
    }

    let userId = null
    let fullName = 'Anonimus'
    let ref = null
    let initData = WebApp.initData

    console.info({
      m: 'debug-purpose',
      t: Array.from(new URLSearchParams(WebApp.initData)),
      loc: window.location,
      initData,
    })
    try {
      const q = new URLSearchParams(initData)
      const startParamsQuery = q.get('start_param')
      const startParam = startParamsQuery?.split('&').reduce((acc, item) => ({
        ...acc,
        [item.split('_')[0]]: item.split('_')[1]
      }), {})
      ref = startParam?.ref
      const user = JSON.parse(q.get('user'))
      userId = user.id
      fullName = user.first_name || user?.last_name ? `${user.first_name} ${user?.last_name}` : user?.username
      if (!fullName) {
        fullName = 'Anonimus'
      }

    } catch {
      console.warn("user info haven't extracted", {initData})
      const debugUserId = import.meta.env.VITE_REACT_APP_DEBUG_USER_ID
      console.warn(`using debug user-id`, {debugUserId})
      if (debugUserId) {
        console.warn(`using debug user-id`, {debugUserId})
        userId = debugUserId
        initData = `query_id=AAGJNXcQAwAAAIk1dxDmPFw1&user=%7B%22id%22%3A${debugUserId}%2C%22first_name%22%3A%22Grace%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22sanya_bullshit%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1723666121&hash=4e147fdc275016262add8251043f72257c285e79acdc9f7c93b1a37533991943`
      } else {
        throw new Error('fail on user-id extract')
      }
    }
    authPromise = ports.fetchPostHaxAuth({initData})
      .then((result) => {
        authPromise = null; // Сбрасываем глобальный промис после завершения
        return {userId, jwtToken: result.jwtToken, fullName, friendId: ref};
      })
      .catch((error) => {
        authPromise = null; // Сбрасываем глобальный промис даже при ошибке
        throw error;
      });

    return authPromise;
  },
)
const showGlobalLoading = reduxjsToolkit.createAsyncThunk(
  'page/showGlobalLoading',
  () => {
  },
)
const hideGlobalLoading = reduxjsToolkit.createAsyncThunk(
  'page/hideGlobalLoading',
  () => {
  },
)

export const pageSlice = reduxjsToolkit.createSlice({
  name: 'page',
  initialState: {
    status: constants.status.idle,
    renderGlobalLoading: true,
    userId: null,
    jwtToken: null,
    failMessage: null,
    isAuthenticated: false, // Новый флаг
  },
  extraReducers(builder) {
    builder
      .addCase(initialize.pending, state => {
        state.status = constants.status.loading
      })
      .addCase(initialize.fulfilled, (state, {payload: {userId, jwtToken, fullName, friendId}}) => {
        state.status = constants.status.success
        state.userId = userId
        state.fullName = fullName
        state.friendId = friendId
        state.jwtToken = jwtToken
        state.isAuthenticated = true
      })
      .addCase(initialize.rejected, (state) => {
        state.status = constants.status.failed
        state.failMessage =
                    'Please reload app<br />there is no user info on start'
      })
    builder.addCase(showGlobalLoading.fulfilled, state => {
      state.renderGlobalLoading = true
    })
    builder.addCase(hideGlobalLoading.fulfilled, state => {
      state.renderGlobalLoading = false
    })
  },
})
pageSlice.selectors = {page: state => state.page}
pageSlice.thunks = {initialize, showGlobalLoading, hideGlobalLoading}
