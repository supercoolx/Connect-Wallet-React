import React from 'react'
import styled from 'styled-components'
import HighSecure from './components/HighSecure'
import Audited from './components/Audited'
import Tokenomics from './components/Tokenomics'

const MidPanelInfo: React.FC = () => {
  return (
    <>
      <SectionPanel
        className="feature-section bg-stars"
        style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px' }}
      >
        <div
          className="container"
          style={{ width: '100%', paddingRight: '0px' }}
        >
          <HighSecure />
          <Audited />
          <Tokenomics />
        </div>
      </SectionPanel>
    </>
  )
}

const SectionPanel = styled.div`
    /*background: #000000;*/
    /*background: -webkit-linear-gradient(to right, #000000, #434343);*/
    /*background: linear-gradient(to right, #000000, #434343);*/
    /*background-image: linear-gradient( 99.9deg, rgba(27,24,31,1) 21.2%, var(--space-cadet) 84.8% );*/
  }
`

export default MidPanelInfo
