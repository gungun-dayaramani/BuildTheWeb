import React from 'react';
import "./collection.css";
import Collection1 from "../../assets/images/collection1.png";
import Collection2 from "../../assets/images/collection2.png";
import Collection3 from "../../assets/images/collection3.png";
import Collection4 from "../../assets/images/collection4.png";
import KeyboadArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Collection = () => {
  return (
    <div className='collection'>
      <h1>Collection</h1>
      <div className='collectionText'>
        <p>
        Explore curated lists of top restaurants, cafes, pubs, and bars in Jodhpur, based on trends
        </p>
        <span>
            All collections in Jodhpur <KeyboadArrowRightIcon/>
        </span>
      </div>
      <div className='collectionCard'>
        <div className='collectionImg'>
            <img src={Collection1} alt='collectionimg'/>
            <h3>Sweet Tooth</h3>
            <span>12 Places <KeyboadArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
            <img src={Collection2} alt='collectionimg'/>
            <h3>Royal Rajasthani Cuisine</h3>
            <span>7 Places<KeyboadArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
            <img src={Collection3} alt='collectionimg'/>
            <h3>10 Must-Visit-Restraunts in Jodhpur</h3>
            <span>8 Places<KeyboadArrowRightIcon/></span>
        </div>
        <div className='collectionImg'>
            <img src={Collection4} alt='collectionimg'/>
            <h3>Cravings</h3>
            <span>7 Places<KeyboadArrowRightIcon/></span>
        </div>
      </div>
    </div>
  )
}
export default Collection;