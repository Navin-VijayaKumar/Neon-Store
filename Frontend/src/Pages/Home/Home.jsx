import React, { Component, createRef } from 'react';
import './Home.css';
import search2 from '../AssertsPage/search2.png'
import { Link } from 'react-router-dom';
export class Home extends Component {
  vantaEffect = null;
  vantaRef = createRef();

  componentDidMount() {
    // Dynamically load Vanta and Three.js scripts
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js'),
    ]).then(() => {
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
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return<div> 
      <div ref={this.vantaRef} className="vanta-container" style={{ height: '100vh', width: '100%' }}></div>

     <div className="search">
    <Link to='/slider'>
        <img src={search2} alt="" />
        </Link>
      </div>
      </div>
    ;
  }
}

export default Home;
