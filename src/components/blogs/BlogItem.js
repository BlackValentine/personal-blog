import React from 'react';
import avatar2 from '../../assets/images/avatar2.jpg';

function BlogItem(props) {
  return (
    <div className='relative bg-white p-7 rounded-2xl mb-20'>
      <div className="relative -mt-14 mb-6 overflow-hidden rounded-xl">
        <img className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-linear' src={props.image} alt="" />
      </div>
      <div>
        <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded'>{props.type}</span>
        <h3 className='text-black font-bold mt-5 mb-2 text-xl cursor-pointer hover:underline'>{props.title}</h3>
        <p className='text-spanish-gray text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio... </p>
        <div className="flex items-center mt-4">
          <img className='w-8 h-8 object-cover object-center rounded-full mr-3' src={avatar2} alt="" />
          <span className='text-xs font-semibold'>Black Valentine</span>
          <div className="w-1 h-1 rounded-full bg-pastel-red mx-3"></div>
          <span className="text-xs font-semibold">February 10, 2022</span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;