import React from 'react';
import avatar from '../../assets/images/avatar2.jpg';

function AboutMe(props) {
  return (
    <div className='flex bg-ghost-white'>
      <div className="flex flex-col items-center container px-auto p-10">
        <img className='h-24 w-24 rounded-full mb-6' src={avatar} alt="" />
        <h3 className='text-2xl font-extrabold text-center mb-4'>Hi, I'm Black Valentine</h3>
        <p className='text-spanish-gray text-center mb-5'>I'm Black Valentine, husband, father and boring developer. I love coding, travel, nature and universe. Welcome to my world.</p>
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-muted-lavender"></div>
          <div className="w-6 h-6 rounded-full bg-royal-fuchsia"></div>
          <div className="w-6 h-6 rounded-full bg-cherenkov-radiation"></div>
          <div className="w-6 h-6 rounded-full bg-youtube-red"></div>
          <div className="w-6 h-6 rounded-full bg-strong-red"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;