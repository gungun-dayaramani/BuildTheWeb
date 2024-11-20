import React from 'react'
import "./card.css";
import Dine from "../../assets/images/Dine-Out.png"
import Online from "../../assets/images/Online-Food.png"

const Card = () => {
  return (
    <div className='card'>
        <div className='cardImg'>
            <img src={Dine} alt='dine_img'/>
            <h1>Order Online</h1>
            <span>Stay home and order to your doorstep</span>
        </div>
        <div className='cardImg'>
            <img src={Online} alt='Online_img'/>
            <h1>Dining</h1>
            <span>View the city's favourite dining venues</span>
        </div>
        
    </div>
  )
};
export default Card;
