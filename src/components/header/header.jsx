import React, { useState } from 'react';
import"./header.css";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.png";

//import { FaLocationDot } from "react-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <nav>
        <span>Get the App</span>
        <div className='right'>
            <span>Investor Relations</span>
            <span>Add restaurant</span>
            <span>Log in</span>
            <span>Sign in</span>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </div>

      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restraurants</span>
            <span>Log in</span>
            <span>Sign in</span>
          </div>
        </div>
      )}
      <div className='headerContent'>
        <img src={Logo} alt='logo_img'/>
        <h3>Discover the best food & drinks in Jodhpur </h3>
        <div className='input'>
          <select name='' id=''>
            <option value='Jodhpur'>Jodhpur</option>
            <option value='Jaipur'>Jaipur</option>
            <option value='Delhi'>Delhi</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Kolkata'>Kolkata</option>
          </select>
          <input type='text' placeholder='Search for restaurent , cuisine or a dish'></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
