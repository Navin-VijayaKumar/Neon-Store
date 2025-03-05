import React from 'react'
import gamepad from '../AssertsPage/gamepad.png'

import './Timeline.css'
const Timeline = () => {

    
  return (
    <div className='all-timeline'>


 <div className="all-timeline1">

        <div className="timeline">
          <div className="container1 l">
          <img src={gamepad}></img>
            <div className="text-box">
              <h2>🎮 Retro</h2>
              <small>⭐ Rating: 8.7/10</small>
              <p>Retro games capture the nostalgia of classic gaming, featuring pixel art, chiptune music, and simple yet addictive mechanics, delivering an old-school gaming experience with modern enhancements.</p>
             <span className='left-con-arrow'></span>
            </div>
          </div>
          <div className="container1 r">
          <img src={gamepad}></img>

            <div className="text-box">
              <h2>🌍 Open World</h2>
              <small>⭐ Rating: 9.5/10</small>
              <p>Open-world games offer vast, explorable environments with minimal restrictions. Players can freely roam, complete missions at their own pace.</p>
              <span className='right-con-arrow'></span>

            </div>
          </div>
          <div className="container1 l">
          <img src={gamepad}></img>
            <div className="text-box">
              <h2>🏎 Racing</h2>
              <small>⭐ Rating: 9.8/10</small>
              
              <p>Racing games focus on high-speed competition, featuring realistic or arcade-style driving mechanics.</p>
              <span className='left-con-arrow'></span>

            </div>
          </div>
          <div className="container1 r">
          <img src={gamepad}></img>

            <div className="text-box">
              <h2>🛠 Simulation</h2>
              <small>⭐ Rating: 8.8/10</small>
               
               <p>Simulation games aim to replicate real-world activities, whether it's managing a city, flying an aircraft, farming, or running a business. They emphasize detail, strategy, and realism, providing immersive experiences</p>
               <span className='right-con-arrow'></span>

            </div>
          </div>
          <div className="container1 l">
          <img src={gamepad}></img>

            <div className="text-box">
              <h2>📖 Story Game</h2>
              <small>⭐ Rating: 8.5/10</small>
            
              <p>Story-driven games prioritize narrative, character development, and emotional engagement. Players make choices that influence the plot, often leading to multiple endings.</p>
              <span className='left-con-arrow'></span>

            </div>
          </div>
          <div className="container1 r">
          <img src={gamepad}></img>
            <div className="text-box">
              <h2>🔑 Product Key</h2>
              <small>⭐ Rating: 9.2/10</small>
              <p>A typical product key format includes alphanumeric characters grouped in sections.</p>
              <span className='right-con-arrow'></span>

            </div>
          </div>

        </div>
       
    </div>
      </div>  )
}

export default Timeline