import React from 'react'
import styled from 'styled-components'

interface CardContentProps {
  onClick: () => void
}

const CardContent: React.FC<CardContentProps> = ({ children }) => (
  <StyledCardContent>{children}</StyledCardContent>
)

const StyledCardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  z-index: 2;
  position: relative;
  height: 30px;
  align-items: center;
  @media (max-width: 767px) {
    left: 0px;
    height: auto;
    padding: 5px;
  }
`

export default CardContent
