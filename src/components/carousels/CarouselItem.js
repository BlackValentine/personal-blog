import React from 'react';
import avatar2 from '../../assets/images/avatar2.jpg';
import "../../index.css";

function CarouselItem(props) {
  return (
    <div className='relative slider-item'>
      <img style={{ height: '600px' }} src={props.image} alt="" className='carousel-item__image w-full object-cover object-center relative'/>
      <div className="container absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-1/2">
        <div className="mb-10">
          <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded-full'>{props.type}</span>
        </div>
        <h3 className="mb-3 font-bold text-4xl text-white w-1/2"> 7 Holiday Decor Ideas and Exactly What I Love About Each One</h3>
        <p className='text-xl text-light-gray w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum eligendi. Ab obcaecati ratione facere ut minus illo sequi rerum!</p>
        <div className="flex items-center mt-4">
          <img className='w-8 h-8 object-cover object-center rounded-full mr-3' src={avatar2} alt="" />
          <span className='text-xs font-semibold text-white'>Black Valentine</span>
          <div className="w-1 h-1 rounded-full bg-pastel-red mx-3"></div>
          <span className="text-xs font-semibold text-white">February 10, 2022</span>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;