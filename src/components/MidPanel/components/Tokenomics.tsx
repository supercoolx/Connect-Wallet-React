import React from 'react'

const TokenomicsInfo: React.FC = () => {
  return (
    <>
      <div
        className="row align-items-center col-xs-0 mb-5 mt-5"
        id="tokenomics"
        style={{ width: '100%' }}
      >
        <div className="col p-0 m-0">
          <section className="features-blue p-5">
            <div className="intro mb-0" style={{ zIndex: 3 }}>
              <h2 className="text-center" data-aos="zoom-in">
                Tokenomics
              </h2>
            </div>
            <div className="row features p-1 m-sm-15 text-center">
              <div
                className="col col-12 col-lg-4"
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h3
                  data-aos="fade"
                  data-aos-duration="1200"
                  className="name m-0"
                >
                  Initial LP
                </h3>
                <p
                  data-aos="fade"
                  data-aos-duration="1200"
                  className="description"
                >
                  90% of the supply was added to the liquidity pool on
                  Pancakeswap, along with 3 BNB.
                </p>
              </div>
              <div
                className="col col-12 col-lg-4"
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <h3
                  data-aos="fade"
                  data-aos-duration="1200"
                  className="name m-0"
                >
                  Burn
                </h3>
                <p
                  data-aos="fade"
                  data-aos-duration="1200"
                  className="description"
                >
                  7% of the total supply was burned.
                </p>
              </div>
              <div
                className="col col-12 col-lg-4"
                data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay="700"
              >
                <h3 className="name m-0">Team wallet</h3>
                <p className="description">
                  3% of tokens has been given to the team's wallet.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default TokenomicsInfo
