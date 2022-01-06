import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>{children}</StyledCardIcon>
)

const StyledCardIcon = styled.div`
  background-color: ${(props) => props.theme.color.grey[200]};
  font-size: 36px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 10px;
  @media (max-width: 767px) {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    margin: 0 auto 11px;
  }
`

export default CardIcon
