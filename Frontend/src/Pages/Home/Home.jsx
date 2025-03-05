import React, { Component, createRef } from 'react';
import './Home.css';
import search2 from '../AssertsPage/search2.png';
import { Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';
import  ve from '../AssertsPage/ve.mp4'
export class Home extends Component {

  render() {
    return (
      <div className='all-timeline'>
     <div className="bg-video1">
          <video autoPlay loop muted playsInline className="video-background">
            <source src={ve} type="video/mp4"  className='bg-video'/>
          </video>
          </div>
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
      
      <div className="div">
        <ImageSlider></ImageSlider>
      </div>
        </div>
    );
  }
}

export default Home;
