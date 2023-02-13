import React from 'react';

function CarouselItem(props) {
  return (
    <div className='relative'>
      <img style={{ height: '600px' }} src={props.image} alt="" className='w-full object-cover object-center' />
      <div className="container absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-1/2">
        <div className="mb-10">
          <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded'>Livestyle</span>
        </div>
        <h3 className="mb-3 font-bold text-4xl text-white w-1/2"> 7 Holiday Decor Ideas and Exactly What I Love About Each One</h3>
        <p className='text-xl text-light-gray w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, harum eligendi. Ab obcaecati ratione facere ut minus illo sequi rerum!</p>
      </div>
    </div>
  );
}

export default CarouselItem;