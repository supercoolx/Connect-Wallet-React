import React, { useEffect } from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect'
import metamaskLogo from '../../assets/img/metamask-fox.svg'
import bscLogo from '../../assets/img/bsc.png'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'
import trustLogo from '../../assets/img/trustwallet.png'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'
import WalletCard from './components/WalletCard'
import Button from '../Button'
import { useWeb3React } from '@web3-react/core'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss, onClick }) => {
  const { account } = useWeb3React()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Modal>
      <ModalTitle text="Connect to a wallet" />
      <ModalContent>
        <StyledWalletsWrapper>
          {isMobile ? (
            <StyledWalletCard>
              <WalletCard
                icon={
                  <img
                    src={metamaskLogo}
                    alt="Metamask"
                    style={{ height: 32 }}
                  />
                }
                onConnect={() => onClick('injected')}
                title="Metamask"
              />
              <Spacer />
              <WalletCard
                icon={
                  <img
                    src={walletConnectLogo}
                    alt="BSC"
                    style={{ height: 32, paddingRight: '-10px' }}
                  />
                }
                onConnect={() => {
                  console.log('walletconnect')
                  onClick('walletconnect')
                }}
                title="WalletConnet"
              />
              <Spacer />
              <WalletCard
                icon={<img src={trustLogo} alt="BSC" style={{ height: 32 }} />}
                onConnect={() => onClick('injected')}
                title="TrustWallet"
              />
            </StyledWalletCard>
          ) : (
            <StyledWalletCard>
              <WalletCard
                icon={
                  <img
                    src={metamaskLogo}
                    alt="Metamask"
                    style={{ height: 32 }}
                  />
                }
                onConnect={() => onClick('injected')}
                title="Metamask"
              />
              <Spacer />
              <WalletCard
                icon={<img src={bscLogo} alt="BSC" style={{ height: 32 }} />}
                onConnect={() => onClick('bsc')}
                title="BSC wallet"
              />
              <Spacer />
              <WalletCard
                icon={
                  <img
                    src={walletConnectLogo}
                    alt="BSC"
                    style={{ height: 32, paddingRight: '-10px' }}
                  />
                }
                onConnect={() => {
                  onClick('walletconnect')
                }}
                title="WalletConnet"
              />
              <Spacer />
              <WalletCard
                icon={<img src={trustLogo} alt="BSC" style={{ height: 32 }} />}
                onConnect={() => onClick('injected')}
                title="TrustWallet"
              />
            </StyledWalletCard>
          )}
        </StyledWalletsWrapper>
      </ModalContent>
      <ModalActions>
        <Button text="Cancel" variant="secondary" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  font-family: 'Print Char 21';
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.7);
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`
export default WalletProviderModal
