// CardSlider.js
import React, { useState } from 'react';
import "./bodySlider.css";
import {useStore} from "../../src/store"
import { Menu } from '../Menu/Menu';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export const CardSlider = ({ cards }) => {
  const {activeCard, setActiveCard} = useStore();
  // const [percentage, setPercentage] = useState(80); 

  const handlePrev = () => {
    setActiveCard(activeCard === 0 ? cards.length - 1 : activeCard - 1);
  };

  const handleNext = () => {
    setActiveCard(activeCard === cards.length - 1 ? 0 : activeCard + 1);
  };


const API = "https://image.tmdb.org/t/p/w300/";
const percentage = 44;
  return (
    <div className='container-slide'>
    <div className="card-slider">
      <div className="cards-container" style={{ transform: `translateX(-${activeCard * 22}%)` }}>
      {cards.map((card, index) => (
          <div
            key={index}
            className="card"
          >
            <div className='overlay'>
            <Menu />
            </div>
            
            <img src={API+card.backdrop_path} alt="" />
            <div className='bg-circle'>
            <div className='circly'><CircularProgressbar value={percentage} text={`${percentage}%`} 
              styles={buildStyles({
                strokeLinecap: 'butt',
                textSize: '28px',
                pathTransitionDuration: 0.5,
                pathColor: percentage >= 50 ? "#0092b3" : "#ff0000f8",
                textColor:  "#fff",
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                width: "10px", 
              })}
            /></div>
            </div>
            <div className="cart-content">
            <span>{card.name}</span>
            <p>{card.first_air_date}</p>
              
          </div>
          </div>
      
        ))}
           
      </div>
      <button className="prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

