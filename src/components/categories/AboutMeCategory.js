import React from 'react';
import avatar from '../../assets/images/avatar.jpeg';

function AboutMeCategory(props) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-very-dark-gray rounded-xl p-7 mb-5 transition-mode">
      <img className='h-24 w-24 rounded-full mb-6' src={avatar} alt="" />
      <h3 className='text-2xl dark:text-white font-extrabold text-center mb-4 transition-mode'>Hi, I'm Black Valentine</h3>
      <p className='text-spanish-gray dark:text-very-light-gray text-center mb-5 transition-mode'>I'm Black Valentine, husband, father and boring developer. I love coding, travel, nature and universe. Welcome to my world.</p>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-muted-lavender"></div>
        <div className="w-6 h-6 rounded-full bg-royal-fuchsia"></div>
        <div className="w-6 h-6 rounded-full bg-cherenkov-radiation"></div>
        <div className="w-6 h-6 rounded-full bg-youtube-red"></div>
        <div className="w-6 h-6 rounded-full bg-strong-red"></div>
      </div>
    </div>
  );
}

export default AboutMeCategory;