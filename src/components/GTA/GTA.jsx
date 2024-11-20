import React, { useState } from 'react'
import "./GTA.css";
import Phone from "../../assets/images/Iphone.png"
import Google from "../../assets/images/Google-Play.png"
import App from "../../assets/images/App-Store.png"


const Gta = () => {

  const [email, setEmail] = useState(true)
  const [phone, setPhone] = useState(false)
  return (
    <div className='gta'>
      <div className='left'>
        <img src={Phone} alt='phoneImg'/>
      </div>
      <div className='right'>
        <h1>Get the Zomato app</h1>
        <p>We will send you a link, open it on your phone to download the app</p>
        <div className="radio">
            <div className="radioBtn">
                <input 
                type="radio" 
                name='radio' 
                id='email'
                onClick={() => setEmail(true) || setPhone(false)}
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className="radioBtn">
                <input 
                type="radio" 
                name="radio" 
                id='phone'
                onClick={() => setPhone(true) || setEmail(false)}
                />
                <label htmlFor="phone">Phone</label>
            </div>
        </div>
        <form className='input'>
            {email && <input type="email" placeholder='Email' />}
            {phone && <input type="number" placeholder='Number' />}
            <button type="submit">Share App Link </button>
        </form>
        <span>Download app from</span>
        <div className="img">
            <img src={Google} alt="google" />
            <img src={App} alt="app" />
        </div>
      </div>
    </div>
  )
}
export default Gta;
