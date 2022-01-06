import React from 'react'

const HighSecureInfo: React.FC = () => {
  return (
    <>
      <div className="row align-items-center" style={{ width: '100%' }}>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <img
              data-aos="fade"
              data-aos-duration="1250"
              className="img-fluid feature-img"
              src="assets/img/shield-1.svg"
            ></img>
          </div>
        </div>
        <div
          className="col-lg-6 order-lg-2 feature-body carbon-bg-gray"
          data-aos="slide-right"
          data-aos-duration="800"
        >
          <div className="p-5">
            <h2 className="display-4 tx-bg-fx tx-bg-no-fx border-dot">
              Highly secure
            </h2>
            <p className="tx-bg-fx">
              All initial liquidity provided has been locked with UniCrypt. The
              contract owner has been renounced, leaving the contract trustless
              and safe for the Moonshield community.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HighSecureInfo
