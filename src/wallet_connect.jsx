import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '13c35e650bd32f7632cb40510c9a66c4'

// 2. Create wagmiConfig
const metadata = {
  name: 'HAX',
  description: 'Are you ready to break the chain?',
  url: window.location.protocol + '//' + window.location.host, // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet]
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableOnramp: false,
  enableAnalytics: true,
  allWallets: 'ONLY_MOBILE',
  customWallets: [
    {
      id: 'metamask',
      name: 'MetaMask test',
      homepage: 'https://metamask.io', // Опционально, ссылка на домашнюю страницу MetaMask
      image_url: '', // Опционально, ссылка на изображение иконки MetaMask
      mobile_link: `metamask://`,
      app_store: 'https://apps.apple.com/app/metamask/id1438144202', // Ссылка на App Store
      play_store: 'https://play.google.com/store/apps/details?id=io.metamask' // Ссылка на Play Store
    }
  ]
})

export function WalletConnectProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
