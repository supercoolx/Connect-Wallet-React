import React from 'react'
import styled from 'styled-components'
// import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    {/* <Footer /> */}
  </StyledPage>
)

const StyledPage = styled.div`
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
`

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export default Page
