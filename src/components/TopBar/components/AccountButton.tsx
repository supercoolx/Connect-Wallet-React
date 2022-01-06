import React, { useCallback /*, useState*/, useEffect } from 'react'
import styled from 'styled-components'
import useModal from '../../../hooks/useModal'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import Button from '../../Button'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../../hooks/useAuth'

const POLLING_INTERVAL = 12000

export enum SupportedChainId {
  MAINNET = 1,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
]

const NETWORK_URLS = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
}

export const walletconnect = new WalletConnectConnector({
  rpc: NETWORK_URLS,
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
})

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

export const bsc = new BscConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

const AccountButton: React.FC = () => {
  const { login, logout } = useAuth()
  const { activate, account, error } = useWeb3React()

  const [onPresentAccountModal] = useModal(<AccountModal />)

  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal
      onClick={login}
      onDismiss={() => console.log('onDismiss')}
    />,
    'provider',
  )

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  const getAccountAddress = () => {
    if (account) {
      var address =
        account.toString().substring(0, 4) +
        '...' +
        account.toString().substr(account.length - 4)
      return address
    }
  }

  return (
    <StyledAccountButton>
      {!account /* && !workAccount*/ ? (
        <Button
          disabled={false}
          onClick={handleUnlockClick}
          size="lg"
          text="Connect wallet"
        />
      ) : (
        <Button
          onClick={onPresentAccountModal}
          size="md"
          text={getAccountAddress()}
        />
      )}
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div``

export default AccountButton
