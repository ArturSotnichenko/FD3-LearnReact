import React from 'react';
import '../Section1/Section1.css'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'
import image4 from '../../../assets/images/image4.jpg'

const Section1 = () => {
    return (
        <div className='section1'>

            <div className='sct1-block1-wrap'>
                <div className='sct1-block1'>
                    <div className='art1-frame'>

                        <p className='sct1-p1'>NEW COLLECTION</p>
                        <p className='sct1-p2'>Menswear 2023</p>


                        <div className='sct1-btns' >
                            <div className='sct1-btn1'> Shop sale</div>
                            <div className='sct1-btn2'>Shop the meanswear</div>
                        </div>
                    </div>
                </div>
            </div>
<div className='sct1-cat'>
<div className=' img2 img-cat'><img className=' img-i' src={image2} alt="image" />
<p>Women's</p>
</div>
<div className='img3 img-cat'> <img className='img-i' src={image3} alt="image" />
<p>Man's</p>
</div>
<div className='img4 img-cat' ><img  className='img-i'  src={image4} alt="image" />
 <p>Kid's</p>  </div>
</div>
 </div>
    );
};

export default Section1;