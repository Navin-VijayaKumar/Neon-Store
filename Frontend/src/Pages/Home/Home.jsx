import React, { Component, createRef } from 'react';
import './Home.css';
import search2 from '../AssertsPage/search2.png';
import { Link } from 'react-router-dom';

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
      <div>
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
       
      </div>
    );
  }
}

export default Home;
