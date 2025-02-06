import React from 'react'
import './SystemReq.css'
const SystemReq = () => {
  return (
    <div className="system-all">
        <div className="system-heading">
          <h2>System Requirements
          </h2>
        </div>
      <div className="system-con">
        <div className="system-left">
          <div className="system-heading-p">
            <h3>Minimum</h3>
          </div>

        <div className="system-os">
          <p className='system-sp'>OS</p>
          <p>d</p>
        </div>
        </div>
          <div className="system-right">
          <div className="system-heading-p">
            <h3>Recommended</h3>
          </div>
          <div className="system-os">
          <p className='system-sp'>OS</p>
          <p>d</p>
        </div>
          </div>
      </div>
    </div>
  )
}

export default SystemReq