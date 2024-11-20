import React from 'react';
import "./Cities.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Cities = () => {
  return (
    <div className='cities'>
      <h1>Popular localities in and around <span>Jodhpur</span>
      </h1>
      <div className="cityContainer">
        <div className='city'>
          <div className='cityLeft'>
              <h3>Sardarpura</h3>
              <span>315 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Ratanada</h3>
              <span>203 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Rawaton ka bass</h3>
              <span>99   Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Choupasani Housing Board</h3>
              <span>245 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Paota</h3>
              <span>187 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Air force area</h3>
              <span>88 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Basni</h3>
              <span>227 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>Shastri Nagar</h3>
              <span>184 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
        <div className='city'>
          <div className='cityLeft'>
              <h3>See More</h3>
              <span>315 Places</span>
          </div>
          <div className='icon'>
            <ChevronRightIcon/>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Cities;
