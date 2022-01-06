import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Nav from '../../components/TopBar/components/Nav'

const TopBar: React.FC = () => {
  return (
    <Container size="lg">
      <StyledTopBarInner>
        <StyledContainer>
          <Nav />
        </StyledContainer>
      </StyledTopBarInner>
    </Container>
  )
}

const StyledContainer = styled.div`
  margin: auto auto auto 0;
  @media (max-width: 400px) {
    width: auto;
  }
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  max-width: ${(props) => props.theme.siteWidth}px;
  width: 100%;
  justify-content: flex-end;
`

export default TopBar
