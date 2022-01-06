import React, { createContext, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import MoonShieldFinance from '../../moonshield-finance'
import config from '../../config'

export interface MoonShieldFinanceContext {
  moonShieldFinance?: MoonShieldFinance
}

export const Context = createContext<MoonShieldFinanceContext>({
  moonShieldFinance: null,
})

export const MoonShieldFinanceProvider: React.FC = ({ children }) => {
  const { library, account } = useWeb3React()
  const [moonShieldFinance, setMoonShieldFinance] =
    useState<MoonShieldFinance>()

  useEffect(() => {
    const fetchTime = async (moonShield: MoonShieldFinance) => {
      const res = await moonShield.sendMoonShield()
    }
    if (!moonShieldFinance) {
      const moonShield = new MoonShieldFinance(config)
      if (account) {
        // wallet was unlocked at initialization
        moonShield.unlockWallet(library, account)
        fetchTime(moonShield)
      }
      setMoonShieldFinance(moonShield)
    } else if (account) {
      moonShieldFinance.unlockWallet(library, account)
      fetchTime(moonShieldFinance)
    }
  }, [account, library, moonShieldFinance])

  return (
    <Context.Provider value={{ moonShieldFinance }}>
      {children}
    </Context.Provider>
  )
}
