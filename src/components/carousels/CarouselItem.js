import React from 'react';
import avatar2 from '../../assets/images/avatar2.jpg';
import "../../index.css";

function CarouselItem(props) {
  return (
    <div className='slider-item'>
      <img style={{ height: '600px' }} src={props.image} alt="" className='carousel-item__image w-full object-cover object-center relative' />
      <div style={{ height: '600px' }} className="absolute inset-0 w-full bg-black/60">
        <div className="container absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-1/2 !mx-10">
          <div className="lg:mb-10 mb-4">
            <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded-full'>{props.type}</span>
          </div>
          <h3 className="mb-3 font-bold lg:text-4xl text-2xl text-white lg:w-1/2 w-3/4"> 7 Holiday Decor Ideas and Exactly What I Love About Each One</h3>
          <p className='lg:text-xl text-base text-light-gray lg:w-1/2 w-3/4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum eligendi. Ab obcaecati ratione facere ut minus illo sequi rerum!</p>
          <div className="flex items-center mt-4">
            <img className='w-8 h-8 object-cover object-center rounded-full mr-3' src={avatar2} alt="" />
            <span className='text-xs font-semibold text-white'>Black Valentine</span>
            <div className="w-1 h-1 rounded-full bg-pastel-red mx-3"></div>
            <span className="text-xs font-semibold text-white">February 10, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;