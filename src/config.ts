import { Configuration } from './moonshield-finance/config'

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: 1,
    networkName: 'Ethereum Mainnet',
    bscscanUrl: 'https://etherscan.io',
    defaultProvider:
      'https://mainnet.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056',
    deployments: require('./moonshield-finance/deployments/deployments.mainnet.json'),
    externalTokens: {},
    refreshInterval: 10000,
  },
  production: {
    chainId: 1,
    networkName: 'Ethereum Mainnet',
    bscscanUrl: 'https://etherscan.io',
    defaultProvider:
      'https://mainnet.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056',
    deployments: require('./moonshield-finance/deployments/deployments.mainnet.json'),
    externalTokens: {},
    refreshInterval: 10000,
  },
}

export default configurations[process.env.NODE_ENV || 'development']
