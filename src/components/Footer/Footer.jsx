import React from 'react';
import "./Footer.css";
import App from "../../assets/images/App-Store.png";
import Phone from "../../assets/images/Google-Play.png";
//import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/FaceBook";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="top1">
            <h2>Zomato</h2>
            <div className="lang">
                <select>
                    <option value="India">India</option>
                    <option value="UAE">UAE</option>
                </select>
                <select>
                    <option value="English">English</option>
                    <option value="Türkçe">Türkçe</option>
                    <option value="हिंदी">हिंदी</option>
                    <option value="Português (BR)">Português (BR)</option>
                    <option value="Indonesian">Indonesian</option>
                    <option value="Português (PT)">Português (PT)</option>
                    <option value="Español">Español</option>
                    <option value="Čeština">Čeština</option>
                    <option value="Slovenčina">Slovenčina</option>
                    <option value="Polish">Polish</option>
                    <option value="Italian">Italian</option>
                    <option value="Vietnamese">Vietnamese</option>
                </select>
            </div>
        </div>
        <div className="bottom1">
            <div className="bottomContent">
                <h4>ABOUT ZOMATO</h4>
                <p>Who we are</p>
                <p>blog</p>
                <p>work with us</p>
                <p>Investor Relations</p>
                <p>Report Fraud</p>
                <p>Contact us</p>
            </div>
            <div className="bottomContent">
                <h4>ZOMAVERSE</h4>
                <p>Zomato</p>
                <p>Blinkit</p>
                <p>Feeding India</p>
                <p>HyperPure</p>
                <p>Zomato Live</p>
                <p>Zomaland</p>
                <p>Weather Union</p>
            </div>
            <div className="bottomContent">
                <h4>FOR RESTAURANTS</h4>
                <p>Partner with us</p>
                <p>Apps For you</p>
            </div>
            <div className="bottomContent">
                <h4>LEARN MORE</h4>
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
                <p>Sitemap</p>
            </div>
            <div className="bottomContent">
                <h4>SOCIAL LINKS</h4>
                <div className="links">
                  <LinkedInIcon />
                  <TwitterIcon />
                  <InstagramIcon />
                  <YouTubeIcon />
                  <FacebookIcon />
              </div>
              <img src={App} alt="app" />
              <img src={Phone} alt="phone" />
            </div>
        </div>
      </div>
      <div className="bottom">
        <p>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
