// Set of helper functions to facilitate wallet setup
import { ChainId } from '../moonshield-finance/types'

export const BSC_BLOCK_TIME = 3

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://etherscan.io',
}

export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET]

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum
  const chainId = 1
  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [
      {
        chainId: `0x${chainId.toString(16)}`,
      },
    ],
  })
}
