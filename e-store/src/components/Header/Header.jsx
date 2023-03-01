import React from 'react';
import profile from '../../assets/icons/profile.svg'
import logo from '../../assets/images/logo.svg'
import outline from '../../assets/icons/outline.svg'
import cart from '../../assets/icons/cart.svg'
import '../Header/Header.css'

const Header = () => {
    return (
        <div className='header-wrapper'> 

          <div className='nav'>
            <div className='nav-wrapper'>
            <div>
              <span> <p>Avalable 24/7 at (405)555-0128</p></span>
              </div>
            
            <div className='nav-el'>
                <a href="">Blog </a>
                <a href="">Contact </a>
            </div>
    
            <div className='reg-wrap'>
            <img src={profile} alt="icon" />
            <p>Log in</p>
            <p>/</p>
            <p>Register</p>

            </div>
            </div>
          </div>


            <div className='header-frame'>
               <div  className='head-wrapper'>
                
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='category'>
                   <div>Woman</div>
                   <div> Men</div>
                   <div> Girls</div>
                   <div>Boys</div>
                   <div>Sale</div>
                </div>

                <div className='input-frame' >
                <input type="search" name="search" id="" placeholder='Search for products...' />
                </div>

                <div className='toolbar'>
                    <div className='toolbar-elm'>
                        <img src={outline} alt="icon" />
                        <p>2</p>
                    </div>

                    <div className='toolbar-elm'>
                        <img src={cart} alt="icon"/>
                        <p>4</p>
                    </div>
                </div>
                </div> 
            </div> 


        </div>
    );
};

export default Header;