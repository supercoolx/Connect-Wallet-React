import { useContext } from 'react'
import { Context } from '../contexts/MoonShieldFinanceProvider'

const useMoonShieldFinance = () => {
  const { moonShieldFinance } = useContext(Context)
  return moonShieldFinance
}

export default useMoonShieldFinance
