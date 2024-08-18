import React from 'react'
import WebApp from '@twa-dev/sdk'
import ReactDOM from 'react-dom/client'
import eruda from 'eruda'
import Modal from 'react-modal'

import * as metamaskSdkReact from '@metamask/sdk-react'
import * as reactRouterDom from 'react-router-dom'
import * as reactRedux from 'react-redux'
import * as reduxjsToolkit from '@reduxjs/toolkit'
import * as tonconnectUiReact from '@tonconnect/ui-react'

import * as pages from 'pages'
import * as slices from 'slices'
import * as constants from 'constants'
import * as components from 'components'

import 'simplebar-react/dist/simplebar.min.css'
import 'react-circular-progressbar/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.sass'
import './index.scss'

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

const walletsListConfiguration = {
  includeWallets: [
    {
      appName: 'tonwallet',
      name: 'TON Wallet',
      imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
      aboutUrl:
        'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
      universalLink: 'https://wallet.ton.org/ton-connect',
      jsBridgeKey: 'tonwallet',
      bridgeUrl: 'https://bridge.tonapi.io/bridge',
      platforms: ['chrome', 'android'],
    },
  ],
}

const App = () => (
  <reactRedux.Provider store={store}>
    <reactRouterDom.BrowserRouter>
      <tonconnectUiReact.TonConnectUIProvider
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
        uiPreferences={{theme: tonconnectUiReact.THEME.DARK}}
        walletsListConfiguration={walletsListConfiguration}
        actionsConfiguration={{
          twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start',
        }}
      >
        <components.toast.Container />
        <metamaskSdkReact.MetaMaskProvider
          debug={false}
          sdkOptions={{
            logging: {
              developerMode: false,
            },
            communicationServerUrl: 'https://metamask-sdk.api.cx.metamask.io/',
            checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
            i18nOptions: {
              enabled: true,
            },
            dappMetadata: {
              name: 'Demo React App',
              url: window.location.protocol + '//' + window.location.host,
            },
          }}
        >
          <_App />
        </metamaskSdkReact.MetaMaskProvider>
      </tonconnectUiReact.TonConnectUIProvider>
    </reactRouterDom.BrowserRouter>
  </reactRedux.Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
