import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import MoonShieldABI from '../constants/abi/moonshield.json'
import { MSHLDTokenAddress } from '../constants/tokenAddresses'

const web3 = new Web3(
  new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'),
)

const MSHLDContract = new web3.eth.Contract(
  MoonShieldABI as unknown as AbiItem,
  MSHLDTokenAddress,
)

export const approve = async (
  lpContract: {
    methods: {
      approve: (
        arg0: any,
        arg1: ethers.BigNumber,
      ) => {
        (): any
        new (): any
        send: { (arg0: { from: any }): any; new (): any }
      }
    }
  },
  masterChefContract: { options: { address: any } },
  account: any,
) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (
  masterChefContract: {
    methods: {
      enterStaking: (arg0: string) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
      deposit: (
        arg0: any,
        arg1: string,
      ) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  pid: number,
  amount: BigNumber.Value,
  account: any,
) => {
  if (pid === 0) {
    return masterChefContract.methods
      .enterStaking(
        new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx: { transactionHash: any }) => {
        return tx.transactionHash
      })
  }

  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const pastaStake = async (
  pastaChefContract: {
    methods: {
      deposit: (arg0: string) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  amount: BigNumber.Value,
  account: any,
) => {
  return pastaChefContract.methods
    .deposit(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const pastaStakeBnb = async (
  pastaChefContract: {
    methods: {
      deposit: () => {
        (): any
        new (): any
        send: {
          (arg0: { from: any; value: string }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  amount: BigNumber.Value,
  account: any,
) => {
  return pastaChefContract.methods
    .deposit()
    .send({
      from: account,
      value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const unstake = async (
  masterChefContract: {
    methods: {
      leaveStaking: (arg0: string) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
      withdraw: (
        arg0: any,
        arg1: string,
      ) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  pid: number,
  amount: BigNumber.Value,
  account: any,
) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking(
        new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx: { transactionHash: any }) => {
        return tx.transactionHash
      })
  }
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const harvest = async (
  masterChefContract: {
    methods: {
      leaveStaking: (arg0: string) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
      deposit: (
        arg0: any,
        arg1: string,
      ) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  pid: number,
  account: any,
) => {
  if (pid === 0) {
    return masterChefContract.methods
      .leaveStaking('0')
      .send({ from: account })
      .on('transactionHash', (tx: { transactionHash: any }) => {
        return tx.transactionHash
      })
  }
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const deposit = async (
  slot: {
    methods: {
      deposit: (arg0: string) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  amount: BigNumber.Value,
  account: any,
) => {
  return slot.methods
    .deposit(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const collectBNB = async (moonContract: string, account: string) => {
  return MSHLDContract.methods
    .claimBNBReward()
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const sendToken = async (
  moonContract: string,
  amount: BigNumber.Value,
  address: string,
  account: string,
) => {
  return MSHLDContract.methods
    .disruptiveTransfer(
      address,
      new BigNumber(amount).times(new BigNumber(10).pow(9)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}

export const withdraw = async (
  slot: {
    methods: {
      withdraw: (arg0: string) => {
        (): any
        new (): any
        send: {
          (arg0: { from: any }): {
            (): any
            new (): any
            on: { (arg0: string, arg1: (tx: any) => any): any; new (): any }
          }
          new (): any
        }
      }
    }
  },
  amount: BigNumber.Value,
  account: any,
) => {
  return slot.methods
    .withdraw(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account })
    .on('transactionHash', (tx: { transactionHash: any }) => {
      return tx.transactionHash
    })
}
