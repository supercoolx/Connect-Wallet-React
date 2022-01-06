import { ChainId } from './types'
import { Deployments } from './deployments'
// import { ChainId } from '@usedapp/core'

export type Configuration = {
  chainId: ChainId
  networkName: string
  bscscanUrl: string
  defaultProvider: string
  deployments: Deployments
  externalTokens: { [contractName: string]: [string, number] }
  config?: BscConfig
  refreshInterval: number
}

export type BscConfig = {
  testing: boolean
  autoGasMultiplier: number
  defaultConfirmations: number
  defaultGas: string
  defaultGasPrice: string
  bscNodeTimeout: number
}

export type TokenInfo = {
  address: string
  decimal: number
}

export const defaultBscConfig = {
  testing: false,
  autoGasMultiplier: 1.5,
  defaultConfirmations: 1,
  defaultGas: '6000000',
  defaultGasPrice: '1000000000000',
  bscNodeTimeout: 10000,
}
