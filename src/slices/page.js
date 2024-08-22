import WebApp from '@twa-dev/sdk'
import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as constants from 'constants'
import * as ports from 'ports'

let authPromise = null;

const initialize = reduxjsToolkit.createAsyncThunk(
    'page/initialize',
    async (_, {getState}) => {
        const state = getState();
        if (state.page.isAuthenticated) {
            return {userId: state.page.userId, jwtToken: state.page.jwtToken};
        }

        // Если запрос уже выполняется, ждем его завершения
        if (authPromise) {
            return authPromise;
        }

        let userId = null
        let fullName = 'Anonimus'
        let ref = null
        const initData = WebApp.initData
        // eslint-disable-next-line no-console
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
            fullName = `${user.first_name} ${user?.last_name}`

        } catch (e) {
            console.warn("user info haven't extracted", {initData})
            console.error(e)
            const debugUserId = process.env.REACT_APP_DEBUG_USER_ID
            if (debugUserId) {
                console.warn(`using debug user-id`, {debugUserId})
                userId = debugUserId
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
            .addCase(initialize.fulfilled, (state, {payload: {userId, jwtToken, fullName}}) => {
                state.status = constants.status.success
                state.userId = userId
                state.fullName = fullName
                state.jwtToken = jwtToken
                state.isAuthenticated = true
            })
            .addCase(initialize.rejected, (state, _action) => {
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
