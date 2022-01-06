import React, { /*useEffect,*/ useState } from 'react'
import AccountButton from '../../../components/TopBar/components/AccountButton'

const Nav: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
        <div
          className="container container-responsive"
          style={{ paddingLeft: '0px', paddingRight: '0px', justifyContent: "center" }}
        >
          <div style={{ display: 'flex' }}>
            <AccountButton />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
