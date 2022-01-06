import { useEffect } from 'react'
import useAuth from './useAuth'

export const connectorLocalStorageKey = 'connectorIdv2'
export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
}

const _binanceChainListener = async () =>
  new Promise<void>((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc
      },
      set(bsc) {
        this.bsc = bsc

        resolve()
      },
    }),
  )

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorId = window.localStorage.getItem(
      connectorLocalStorageKey,
    ) as ConnectorNames

    if (connectorId) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
