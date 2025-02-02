import React from 'react';
import './Rating.css';
import starns2 from '../Asserts/starns2.png';

const Rating = ({ rating }) => {
  return (
    <div>
        <div className="rating-all">

      <div className="rating-container"> 
        {Array.from({ length: rating }, (_, i) => (
            <img src={starns2} key={i} alt="star" />
        ))}
        </div>
        <div className="rating-num">
          <p>{rating}</p>
      </div>
        </div>
    </div>
  );
};

export default Rating;
