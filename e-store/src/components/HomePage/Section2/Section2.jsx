import React from 'react';
import '../Section2/Section2.css'

const Section2 = () => {
    return (
        <div className='section2'>
            <div className='baners1'>
                <div className='ban1-wrapper'>
                    <div className='ban-wrap'>
                        <div className='ban-art'>
                            <p className='sct2-p1'>Summer Collections</p>
                            <h2 className='sct2-p2' >Sale Up to 70%</h2>
                           <div className='btn-wrap'> <button className='ban-btn'> <p>Explore new prices</p>  </button></div>
                        </div>
                    </div>
                </div>
                
                <div className='ban2-wrapper'>
                    <div className='ban-wrap'>
                        <div className='ban-art'>
                            <p className='sct2-p1'>Deal of the week</p>
                            <h2 className='sct2-p2'>Stay Warm With Our New Sweaters</h2>
                           <div className='btn-wrap'>
                            <button className='ban-btn'>Shop now </button></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='baners1'>
                <div className='ban3-wrapper'>
                    <div className='ban-wrap'>
                        <div className='ban-art'>
                            <p className='sct2-p1'>New collection</p>
                            <h2 className='sct2-p2'> <p>Shoes & Bags </p> 
                          <p> autumn / winter 2020</p> </h2>
                          <div  className='btn-wrap'> <button className='ban-btn'>See offers </button></div> 
                        </div>
                    </div>
                </div>
                
                <div className='ban4-wrapper'>
                    <div className='ban-wrap'>
                        <div className='ban-art'>
                            <p className='sct2-p1'>For All new Email Subscribers</p>
                            <h2 className='sct2-p2'>Get 5% Off & Free Delivery</h2>
                            <div className='inp-wrap'>
                                <input type="email" placeholder='Your working email' name="" id="" />
                              <div className='btn-wrap'>  <button className = 'sub-btn' type="submit"> Subscribe</button></div>
                            </div>
                            <p> *Sign up to be the first to hear about exclusive deals,
                                 special offers and upcoming collections.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section2;