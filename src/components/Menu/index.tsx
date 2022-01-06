import React from 'react'

export default function Menu() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
        <div className="container">
          <div className="col">
            <a href="https://moonshield.finance">
              <img
                src="assets/img/Horizontal%20logo.svg"
                style={{ maxWidth: '50%' }}
                loading="lazy"
              ></img>
            </a>
          </div>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navbarResponsive"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tokenomics">
                  TOKENOMICS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#buy">
                  HOW TO BUY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://moonshield.finance/dashboard"
                >
                  LAUNCH DAPP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
