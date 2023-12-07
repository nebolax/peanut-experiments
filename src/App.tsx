import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { sepolia } from 'viem/chains'
import { Main } from './Main'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'bbe67525e3d8c5ca5e6eb00c861590d5'

// 2. Create wagmiConfig
const metadata = {
  name: 'Peanuuuuuuuuuuuuut',
  description: 'Go nuts go nuts go nuts go nuts go nuts go nuts',
  url: 'https://peanut.to',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [sepolia]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, defaultChain: sepolia })

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Main/>
    </WagmiConfig>
  )
}