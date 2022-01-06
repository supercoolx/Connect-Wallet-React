import React, { useCallback } from 'react'
import styled from 'styled-components'
import Button from '../../Button'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import accountImg from '../../../assets/img/logoletras.svg'
import { useWeb3React } from '@web3-react/core'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, deactivate } = useWeb3React()

  const handleSignOutClick = useCallback(() => {
    deactivate()
    onDismiss()
  }, [onDismiss, deactivate /*reset*/])

  return (
    <div>
      <Modal>
        <ModalTitle text="My Account" />
        <ModalContent>
          <Spacer />

          {/* <div style={{ display: 'flex' }}>
            <StyledBalanceWrapper>
              <img style={{ width: '100%' }} src={accountImg}></img>
              <StyledBalance></StyledBalance>
            </StyledBalanceWrapper>
          </div> */}

          <Spacer />
          <div
            style={{
              width: 316,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              bottom: 12,
            }}
          >
            <Button
              href={'https://bscscan.com/address/' + account /*wallet.account*/}
              text="View on Bscscan"
              variant="secondary"
            />
          </div>
          <Spacer />
          <div
            style={{
              width: 316,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              bottom: 12,
            }}
          >
            <Button
              onClick={handleSignOutClick}
              text="Sign out"
              variant="secondary"
            />
          </div>
        </ModalContent>
        <ModalActions>
          <div
            style={{
              width: 180,
              marginLeft: 'auto',
              marginRight: 'auto',
              position: 'relative',
              bottom: 12,
            }}
          >
            <Button onClick={onDismiss} text="Cancel" />
          </div>
        </ModalActions>
      </Modal>
    </div>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

export default AccountModal
