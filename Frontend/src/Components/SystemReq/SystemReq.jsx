import React from 'react'
import './SystemReq.css'
const SystemReq = (props) => {
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
          <p>{props.osMin}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Processor</p>
          <p>{props.proMin}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Memory</p>
          <p>{props.memoryMin}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Storage</p>
          <p>{props.storageMin}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Graphic Card</p>
          <p>{props.graphicMin}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Performance</p>
          <p>{props.otherMin}</p>
        </div>
      
        </div>
          <div className="system-right">
          <div className="system-heading-p">
            <h3>Recommended</h3>
          </div>
          <div className="system-os">
          <p className='system-sp'>OS</p>
          <p>{props.osRec}</p>
        </div>
          <div className="system-os">
          <p className='system-sp'>Processor</p>
          <p>{props.proRec}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Memory</p>
          <p>{props.memoryRec}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Storage</p>
          <p>{props.storageRec}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Graphic Card</p>
          <p>{props.graphicRec}</p>
        </div>
        <div className="system-os">
          <p className='system-sp'>Performance</p>
          <p>{props.otherRec}</p>
        </div>
        </div>
      </div>
        <div className="lan">
        <div className="system-os">
          <p className='system-sp'>Languages</p>
          <p>{props.languages}</p>
        </div>
          </div>
    </div>
  )
}

export default SystemReq