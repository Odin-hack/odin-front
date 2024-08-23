import React from 'react'
import WebApp from '@twa-dev/sdk'
import ReactDOM from 'react-dom/client'
import eruda from 'eruda'
import Modal from 'react-modal'

import * as reactRouterDom from 'react-router-dom'
import * as reactRedux from 'react-redux'
import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as pages from 'pages'
import * as slices from 'slices'
import * as constants from 'constants'
import * as components from 'components'

import { WalletConnectProvider } from './wallet_connect'

import 'simplebar-react/dist/simplebar.min.css'
import 'react-circular-progressbar/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.sass'

const routePathComponent = {
  '/home': <pages.Home />,
  '/leaderboard': <pages.Leaderboard />,
  '/tasks': <pages.Tasks />,
  '/friends': <pages.Friends />,
}

const _App = () => {
  const dispatch = reactRedux.useDispatch()
  const page = reactRedux.useSelector(slices.pageSlice.selectors.page)
  React.useEffect(() => {
    WebApp.expand()
    WebApp.ready()
    WebApp.enableClosingConfirmation()
    Modal.setAppElement('#root-modal')
    dispatch(slices.pageSlice.thunks.initialize())
    if (process.env.REACT_APP_RENDER_DEBUG_CONSOLE === '1') {
      eruda.default.init()
    }
  }, [])
  return (
    <>
      {page.status !== constants.status.success || page.renderGlobalLoading ? (
        <components.loading.LoadingOnLoad failMessage={page.failMessage} />
      ) : null}
      {page.status === constants.status.success && (
        <reactRouterDom.Routes>
          <reactRouterDom.Route
            path="*"
            element={<reactRouterDom.Navigate to="/home" />}
          />
          {constants.routes
            .map(({path}) => ({
              path,
              component: routePathComponent[path],
            }))
            .map(({path, component}) => (
              <reactRouterDom.Route
                key={path}
                path={path}
                element={component}
              />
            ))}
        </reactRouterDom.Routes>
      )}
    </>
  )
}

const store = reduxjsToolkit.configureStore({
  reducer: {
    user: slices.userSlice.reducer,
    leaderboard: slices.leaderboardSlice.reducer,
    homePage: slices.homePageSlice.reducer,
    page: slices.pageSlice.reducer,
    friends: slices.friendsSlice.reducer,
    tasks: slices.tasksSlice.reducer,
  },
})

const App = () => (
  <reactRedux.Provider store={store}>
    <reactRouterDom.BrowserRouter>
        <components.toast.Container />
        <WalletConnectProvider>
          <_App />
        </WalletConnectProvider>
    </reactRouterDom.BrowserRouter>
  </reactRedux.Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
