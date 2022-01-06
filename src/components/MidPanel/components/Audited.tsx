import React from 'react'
import styled from 'styled-components'

const AuditedInfo: React.FC = () => {
  return (
    <>
      <div
        className="row mt-5 d-flex align-items-center justify-content-center flex-column"
        id="audits"
        style={{ width: '100%' }}
      >
        <div className="col d-flex align-items-center justify-content-center col-xs-12">
          <h2 data-aos="zoom-in" className="mb-0 display-4 text-white">
            AUDITED BY
          </h2>
        </div>
        <div className="col">
          <section className="features-boxed">
            <SectionContainer className="row justify-content-center features-blue d-flex flex-wrap flex-row justify-content-column align-items-center p-0">
              <div
                className="col-sm-6 col-md-5 col-lg-4 item flex-grow-1 flex-column col-sm-12 p-0"
                data-aos="slide-up"
                data-aos-duration="800"
                style={{ alignSelf: 'stretch' }}
              >
                <div
                  data-aos="slide-up"
                  data-aos-duration="850"
                  className="box d-flex flex-column flex-grow-1"
                >
                  <div className="d-flex align-items-center justify-content-center audit-img">
                    <img
                      src="assets/img/Tempclipboard-image.png"
                      style={{ maxWidth: '75%' }}
                    ></img>
                  </div>
                  <h3 className="name">TechRate</h3>
                  <p className="description">
                    $MSHLD passed TechRate's audit in April 2021.
                  </p>
                  <a
                    className="learn-more"
                    href="http://moonshield.finance/MoonShield%20Full%20Smart%20Contract%20Security%20Audit.pdf"
                  >
                    Read audit »
                  </a>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-5 col-lg-4 item flex-grow-1 flex-column col-sm-12 p-0"
                data-aos="slide-up"
                data-aos-duration="800"
                style={{ alignSelf: 'stretch' }}
              >
                <div
                  data-aos="slide-up"
                  className="box d-flex flex-column flex-grow-1"
                >
                  <div className="d-flex align-items-center justify-content-center audit-img">
                    <img
                      src="assets/img/Tempclipboard-image-1.png"
                      style={{ maxWidth: '75%' }}
                    ></img>
                  </div>
                  <h3 className="name">Solidity</h3>
                  <p className="description">
                    Solidity audited $MSHLD in May 2021 and passed.
                  </p>
                  <a
                    className="learn-more"
                    href="https://solidity.finance/audits/MoonShield/"
                  >
                    Read audit »
                  </a>
                </div>
              </div>
            </SectionContainer>
          </section>
        </div>
      </div>
    </>
  )
}

const SectionContainer = styled.div`
    flex-flow: row wrap;
    border: 3px solid rgba(255,255,255,0.3);
  }
`
export default AuditedInfo
