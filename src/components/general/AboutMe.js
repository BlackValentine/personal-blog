import React from 'react';
import avatar from '../../assets/images/avatar.jpeg';
import './AboutMe.scss';
import aboutMe from "../../assets/images/aboutme.jpeg";
import aboutMe1 from "../../assets/images/aboutme1.jpeg";
import aboutMe2 from "../../assets/images/aboutme2.jpeg";
import aboutMe4 from "../../assets/images/aboutme4.jpeg";
import aboutMe5 from "../../assets/images/aboutme5.jpeg";
import aboutMe6 from "../../assets/images/aboutme6.jpeg";
import aboutMe7 from "../../assets/images/aboutme7.jpeg";

function AboutMe(props) {
  return (
    <div className='flex flex-col bg-ghost-white'>
      <div className="flex flex-col items-center container px-auto !py-10">
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

      <div className="about__layout">
        <div className="about__layout-item">
          <img src={aboutMe2} alt="" className="about__layout-item" />
        </div>
        <div className="about__layout-item">
          <img src={aboutMe1} alt="" className="about__layout-item" />
        </div>
        <div className="about__layout-item">
          <img src={aboutMe} alt="" className="about__layout-item" />
        </div>
        <div className="about__layout-item">
          <img src={aboutMe4} alt="" className="about__layout-item" />
        </div>
        <div className="about__layout-item">
          <img src={aboutMe5} alt="" className="about__layout-item" />
        </div>
        <div className="about__layout-item">
          <img src={aboutMe6} alt="" className="about__layout-item" />
        </div>
        <div className="about__layout-item">
          <img src={aboutMe7} alt="" className="about__layout-item" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;