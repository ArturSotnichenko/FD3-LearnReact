import React from 'react';


import './Footer.css'

import facebook from '../../assets/icons/facebook.svg'
import insta from '../../assets/icons/insta.svg'
import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'



const Footer = () => {
    return (
       <footer>
        <div className='footer-wrapper'>
           <div className='nav-block'>
            <div className='n-block'>
                <ul>
                    <h5>HELP</h5>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                    <a href="">Blog</a>
                    </li>
                </ul>
            </div>
            <div className='n-block'>
            <ul>
                <h5>SHOP</h5>
                    <li>
                        <a href="">Sales</a>
                    </li>
                    <li>
                    <a href="">Brands</a>
                    </li>
                </ul>
            </div>
            </div>

            <div className='contact-wrap'>
            <h5>GET IN TOUCH</h5>
            <p>Call:(405)555-0128 </p>
            <p>Email:hello@createx.com</p>
            <div className='media-block'>
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />

            </div>
           
                 
            </div>

        </div>


       </footer>
    );
};

export default Footer;