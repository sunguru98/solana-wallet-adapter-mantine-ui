import { Container, Stack } from '@mantine/core'

import { WalletModalProvider } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { clusterApiUrl } from '@solana/web3.js'
import { HomeUiExample, HomeUiHero } from '../ui'

export function HomeFeature() {
  return (
    <Container size="xl">
      <ConnectionProvider endpoint={clusterApiUrl('devnet')}>
        <WalletProvider wallets={[]}>
          <WalletModalProvider>
            <Stack gap="xl">
              <HomeUiHero />
              <HomeUiExample />
            </Stack>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Container>
  )
}
