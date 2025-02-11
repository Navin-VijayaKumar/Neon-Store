import React from 'react'
import './Footer.css'
import gamel1 from '../Asserts/gamel1.png';
import linkedin from '../Asserts/linkedin.png';
import x from '../Asserts/x.png';
import fbns from '../Asserts/fbns.png';

const Footer = () => {
  return (
    <div className='footer-con'>
      <div className="footer-icons">
        <img src={linkedin}></img>
        <img src={fbns}></img>
        <img src={x}></img>
      </div>
      <div className="footer-heading">
        <h4>Company</h4>

      </div>
      <div className="footer-about">
        <p>© 2025, Neon Store, Inc. All rights reserved.  Neon Games, the Neon Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Neon store, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners.
        Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Neon Store has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
      <div className="footer-img">
        <img src={gamel1}></img>
      </div>
      </div>
    </div>
  )
}

export default Footer