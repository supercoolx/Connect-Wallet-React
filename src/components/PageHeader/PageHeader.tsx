import React, { useCallback } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import Container from '../Container'
import { useWeb3React } from '@web3-react/core'

interface PageHeaderProps {
  icon: React.ReactNode
  title?: string
  description?: string
  account?: string
  balance?: number
  price?: number
}

const PageHeader: React.FC<PageHeaderProps> = ({
  icon,
  title,
  description,
  account,
  balance,
  price,
}) => {
  // const { reset } = bsc.useWallet()
  const { deactivate } = useWeb3React()
  const handleSignOutClick = useCallback(() => {
    // deactivate() // reset()
  }, [deactivate /**reset */])

  const getAccountAddress = () => {
    if (account) {
      var address =
        account.toString().substring(0, 8) +
        '...' +
        account.toString().substr(account.length - 8)
      return address
    }
    return ''
  }

  const myBalance = 'MSHLD ' + balance
  const token = '(' + (balance * price).toFixed(2) + ' $)'

  const buyAddress =
    'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc'

  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledSignoutButtonArea>
          <StyledExternalLink href={buyAddress} target="__blank">
            Buy $MSHLD
          </StyledExternalLink>
        </StyledSignoutButtonArea>
        <StyledDetail>
          <StyledDetailTitle>Address informations</StyledDetailTitle>
          <StyledDetailSubTitle>Your address</StyledDetailSubTitle>
          <StyledInfo>{getAccountAddress()}</StyledInfo>
          <br />
          <StyledDetailSubTitle>Your MoonShield balance</StyledDetailSubTitle>
          <StyledInfo>{myBalance}</StyledInfo>
          <StyledInfo>{token}</StyledInfo>
        </StyledDetail>
        <StyledSignoutButtonArea>
          <Button
            onClick={handleSignOutClick}
            text="Sign out"
            variant="secondary"
          />
        </StyledSignoutButtonArea>
      </StyledPageHeader>
    </Container>
  )
}

const StyledExternalLink = styled.a`
  align-items: center;
  background-color: #ffc107;
  border-radius: 20px;
  color: #fff;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  height: 42px;
  justify-content: center;
  margin-top: 10px;
  text-decoration: none;
`

const StyledDetailTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

const StyledDetailSubTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
`

const StyledSignoutButtonArea = styled.div`
  margin-top: 10px;
  width: 100%;
`

const StyledDetail = styled.div`
  width: 100%;
  border: 1px solid #ffc107;
  margin-top: 15px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[2]}px;
  margin: 0 auto;
  font-size: 27px;
  @media (max-width: 767px) {
    padding-top: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledDescription = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  flex: 1 1 0%;
  line-height: 15px;
  text-align: center;
  color: #ffc107;
  @media (max-width: 767px) {
  }
`

const StyledTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 35px;
  color: #ffc107;
  line-height: 44px;
  padding: 16px 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  @media (max-width: 767px) {
  }
`

const StyledInfo = styled.div`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 15px;
  line-height: 16px;
  font-weight: bold;
  margin: auto;
  text-align: left;
  cursor: pointer;
  overflow-wrap: anywhere;
`

const StyledIcon = styled.div`
  text-align: center;
  position: relative;
  margin-top: 0px;
  @media (max-width: 767px) {
    left: 0px;
  }
`

export default PageHeader
