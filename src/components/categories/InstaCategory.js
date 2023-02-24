import React from 'react';
import insta1 from '../../assets/images/aboutme1.jpeg';
import insta2 from '../../assets/images/aboutme2.jpeg';
import insta3 from '../../assets/images/aboutme3.webp';
import insta4 from '../../assets/images/aboutme4.jpeg';
import insta5 from '../../assets/images/aboutme5.jpeg';
import insta6 from '../../assets/images/aboutme6.jpeg';

function InstaCategory(props) {
  return (
    <div className="flex flex-col bg-white dark:bg-very-dark-gray rounded-xl p-7 mb-5 transition-mode">
      <div className="h-0.5 w-7 mb-1 bg-pastel-red"></div>
      <h3 className="font-bold text-xl mb-3 dark:text-white transition-mode">Instagram</h3>
      <div className="grid grid-cols-3 gap-1">
        <div className="rounded overflow-hidden cursor-pointer">
          <div className="pt-full relative">
            <img className='absolute inset-0 hover:scale-110 transition-transform duration-300 ease-linear' src={insta1} alt="" />
          </div>
        </div>

        <div className="rounded overflow-hidden cursor-pointer">
          <div className="pt-full relative">
            <img className='absolute inset-0 w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-linear' src={insta2} alt="" />
          </div>
        </div>

        <div className="rounded overflow-hidden cursor-pointer">
          <div className="pt-full relative">
            <img className='absolute inset-0 w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-linear' src={insta3} alt="" />
          </div>
        </div>

        <div className="rounded overflow-hidden cursor-pointer">
          <div className="pt-full relative">
            <img className='absolute inset-0 w-full h-full hover:scale-110 transition-transform duration-300 ease-linear' src={insta4} alt="" />
          </div>
        </div>

        <div className="rounded overflow-hidden cursor-pointer">
          <div className="pt-full relative">
            <img className='absolute inset-0 hover:scale-110 transition-transform duration-300 ease-linear' src={insta5} alt="" />
          </div>
        </div>

        <div className="rounded overflow-hidden cursor-pointer">
          <div className="pt-full relative">
            <img className='absolute inset-0 hover:scale-110 transition-transform duration-300 ease-linear' src={insta6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstaCategory;