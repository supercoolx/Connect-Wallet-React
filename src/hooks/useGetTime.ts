import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import useMoonShieldFinance from './useMoonShieldFinance'

export const useGetTime = () => {
  const moonShieldFinance = useMoonShieldFinance()
  const { GettingTime } = moonShieldFinance.contracts
  const [time, setTime] = useState(BigNumber.from(0))

  useEffect(() => {
    const fetchTime = async () => {
      const res = await GettingTime.gettingtime()
      setTime(BigNumber.from(res))
    }
    fetchTime()
  }, [setTime, moonShieldFinance, GettingTime])
  return time
}
