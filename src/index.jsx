import React from 'react'
import WebApp from '@twa-dev/sdk'
import ReactDOM from 'react-dom/client'
import eruda from 'eruda'
import Modal from 'react-modal'

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import * as reactRouterDom from 'react-router-dom'
import * as reactRedux from 'react-redux'
import * as reduxjsToolkit from '@reduxjs/toolkit'

import * as pages from '@/pages'
import * as slices from '@/slices'
import * as constants from '@/constants'
import * as components from '@/components'

import 'simplebar-react/dist/simplebar.min.css'
import 'react-circular-progressbar/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.sass'
import { initializeGA } from "@/gtag.js";

const routePathComponent = {
  '/home': <pages.Home/>,
  '/leaderboard': <pages.Leaderboard/>,
  '/tasks': <pages.Tasks/>,
  '/friends': <pages.Friends/>,
  // '/events': <pages.Events />
}

/**
 * Знатное костылище, которое решает проблему с рендером спина при первой загрузке страницы
 * Телега почему-то не рендерит элементы, которые анимируются ниже фрейма, которй ограничен не развернутым окном
 * и не обновляет этот фрейм послу WebApp.expand(), по-этому нам приходится преезагружать страницу сразу после развертывания
 * что бы все элементы отрендерились корректно
 */
const isReloaded = sessionStorage.getItem('isReloaded')
if (!isReloaded) {
  sessionStorage.setItem('isReloaded', '1')
  WebApp.expand()
  setTimeout(() => window.location.reload(), 500)
}

export const AppInner = () => {
  const dispatch = reactRedux.useDispatch()
  const page = reactRedux.useSelector(slices.pageSlice.selectors.page)
  const {routeBlock} = reactRedux.useSelector(slices.routeBlockSlice.selectors.routeBlock)

  React.useEffect(() => {
    WebApp.expand()
    WebApp.disableVerticalSwipes()
    WebApp.enableClosingConfirmation()
    Modal.setAppElement('#root-modal')
    dispatch(slices.pageSlice.thunks.initialize())
    initializeGA()

    WebApp.onEvent('viewportChanged', () => window.dispatchEvent(new Event('resize')))

    if (import.meta.env.VITE_REACT_APP_RENDER_DEBUG_CONSOLE === '1') {
      eruda.default.init()
    }
  }, [dispatch])

  const routeStyles = {
    pointerEvents: routeBlock ? 'none' : 'auto',
  }
  return (
    <>
      {page.status !== constants.status.success || page.renderGlobalLoading ? (
        <components.loading.LoadingOnLoad failMessage={page.failMessage}/>
      ) : null}
      {page.status === constants.status.success && (
        <div style={routeStyles}>
          <reactRouterDom.Routes>
            <reactRouterDom.Route
              path="*"
              element={<reactRouterDom.Navigate to="/home"/>}
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
        </div>
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
    routeBlock: slices.routeBlockSlice.reducer,
  },
})

const App = () => (
  <reactRedux.Provider store={store}>
    <reactRouterDom.BrowserRouter>
      <components.toast.Container/>
      <TonConnectUIProvider
        manifestUrl={`${ import.meta.env.VITE_REACT_APP_URL_UI }/tonconnect-manifest.json`}
        actionsConfiguration={{
          twaReturnUrl: import.meta.env.VITE_TELEGRAM_APP_URL,
        }}
      >
        <AppInner/>
      </TonConnectUIProvider>
    </reactRouterDom.BrowserRouter>
  </reactRedux.Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
