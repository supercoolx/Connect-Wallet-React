import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ModalsProvider from './contexts/Modals'
import { themeReducer } from './redux/themeReducer'
import { lightTheme } from './theme'
import MobileMenu from './components/MobileMenu'
import Dashboard from './views/Dashboard'
import MoonShieldFinanceProvider from './contexts/MoonShieldFinanceProvider'

const store = createStore(themeReducer)

const POLLING_INTERVAL = 12000
const getLibrary = (provider: any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.backgroundColor};
    color: ${(props: any) => props.theme.bodycolor};
  }
`
const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  return (
    <Providers>
      <Router>
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Dashboard />
        </Switch>
      </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <MoonShieldFinanceProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </MoonShieldFinanceProvider>
        </Provider>
      </Web3ReactProvider>
    </ThemeProvider>
  )
}

export default App
