// import React from 'react';
import { Carousel } from 'antd';
import kural1 from './../image/kural1.jpg'
import kural2 from './../image/kural2.jpg'
import kural3 from './../image/kural3.jpg'
import kural4 from './../image/kural4.jpg'
import kural5 from './../image/kural5.jpg'
import kural6 from './../image/kural6.jpg'

const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className='my-8'>
        <Carousel autoplay afterChange={onChange} className='w-full sm:w-1/2 px-2 h-1/2 mx-auto'>
            <div className=''>
                <img className='mx-auto' src={kural1} alt="" />
            </div>
            <div className=''>
                <img className='mx-auto' src={kural2} alt="" />
            </div>
            <div className=''>
                <img className='mx-auto' src={kural3} alt="" />
            </div>
            <div className=''>
                <img className='mx-auto' src={kural4} alt="" />
            </div>
            <div className=''>
                <img className='mx-auto' src={kural5} alt="" />
            </div>
            <div className=''>
                <img className='mx-auto' src={kural6} alt="" />
            </div>
            
        </Carousel>
    </div>
    
  );
};
export default Slider;