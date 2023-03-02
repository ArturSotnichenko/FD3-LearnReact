import React from 'react';
import '../Section2/Section2.css'

const Section2 = () => {
    return (
        <div className='section2'>
            <div>
                <div className='ban1-wrapper'>
                    <div className='ban1-wrap'>
                        <div className='ban1-art'>
                            <p>Summer Collections</p>
                            <p>Sale Up to 70%</p>
                            <button className='ban-btn'>Explore new prices </button>
                        </div>
                    </div>
                </div>
                
                <div className='ban2-wrapper'>
                    <div className='ban2-wrap'>
                        <div className='ban2-art'>
                            <p>Deal of the week</p>
                            <p>Stay Warm With Our New Sweaters</p>
                            <button className='ban-btn'>Shop now </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Section2;