import React from 'react'
import styled, { keyframes } from 'styled-components'

export interface ModalProps {
  onDismiss?: () => void
  onClick?: (providerTitle: any) => void
}

const Modal: React.FC = ({ children }) => {
  return (
    <StyledResponsiveWrapper>
      <StyledModal>{children}</StyledModal>
    </StyledResponsiveWrapper>
  )
}

const mobileKeyframes = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const StyledResponsiveWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex: 1;
    position: absolute;
    top: 75%;
    right: 0;
    left: 0;
    max-height: calc(100% - ${(props) => props.theme.spacing[4]}px);
    animation: ${mobileKeyframes} 0.3s forwards ease-out;
  }
`

const StyledModal = styled.div`
  border-radius: 20px;
  margin: 0px 0px 2rem;
  background-color: rgba(250, 255, 215, 0.25);
  box-shadow: rgb(47 128 237 / 5%) 0px 4px 8px 0px;
  padding: 26px 0px 47px;
  overflow: hidden;
  max-width: 420px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  @media (max-width: 800px) {
  }
`

export default Modal
