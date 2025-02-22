import React, { Component, createRef } from 'react';
import './Home.css';
import search2 from '../AssertsPage/search2.png';
import { Link } from 'react-router-dom';
import gamepad from '../AssertsPage/gamepad.png'
export class Home extends Component {
  vantaEffect = null;
  vantaRef = createRef();

  componentDidMount() {
    // Load scripts dynamically
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = (error) => {
          console.error(`Failed to load script: ${src}`, error);
          reject(error);
        };
        document.body.appendChild(script);
      });

    // Load Three.js and Vanta scripts sequentially
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js'))
      .then(() => {
        if (window.VANTA && window.VANTA.DOTS) {
          this.vantaEffect = window.VANTA.DOTS({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x800ff,
            color2: 0xc0289c,
          });
        } else {
          console.error('Vanta or DOTS not available on window object.');
        }
      })
      .catch((error) => {
        console.error('Error loading scripts:', error);
      });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div className='all-timeline'>
        {/* Vanta effect container */}
        <div ref={this.vantaRef} className="vanta-container" style={{ height: '100vh', width: '100%' }}></div>

        {/* Search section */}
        <div className="home-title-pos">

        <div className="home-title">
          <h2 className='text'>Welcome to Neon Store</h2>
        </div>
        </div>
        <Link to='/slider'>
        
        <div className="shop-now">
          <p>Shop Now</p>
        </div>
        </Link>
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
        </div>
    );
  }
}

export default Home;
