import React from 'react';

function Footer(props) {
  return (
    <div className='bg-eerie-black'>
      <div className="container">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <h6 className='text-white font-bold text-3xl pt-14 mb-3'>Get The Best Blog Stories Into Your Inbox!</h6>
          <p className="text-light-gray text-base mb-7">Sign up for free and be the first to get notified about new posts.</p>
          <div className="flex items-center h-11 w-full mb-10">
            <input className='w-full h-full pl-4 rounded-tl-full rounded-bl-full' type="text" placeholder='Your email address' />
            <button className='flex bg-pastel-red text-white font-bold text-base h-full px-5 rounded-tr-full rounded-br-full'>
              <span className='m-auto'>Subscribe</span>
            </button>
          </div>
          <ul className='flex items-center gap-5 mb-10'>
            <li>
              <a className='flex items-center gap-1' href="https://www.facebook.com/">
                <i className="fab fa-facebook-f text-light-gray"></i>
                <span className='text-light-gray'>Facebook</span>
              </a>
            </li>
            <li>
              <a className='flex items-center gap-1' href="https://www.instagram.com/">
                <i className="fab fa-instagram text-light-gray"></i>
                <span className='text-light-gray'>Instagram</span>
              </a>
            </li>
            <li>
              <a className='flex items-center gap-1' href="https://github.com/">
                <i className="fab fa-github text-light-gray"></i>
                <span className='text-light-gray'>Github</span>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/' className='flex items-center gap-1'>
                <i className="fab fa-linkedin-in text-light-gray"></i>
                <span className='text-light-gray'>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex py-7 border-t border-solid border-white/10">
          <span className='text-white mx-auto'>© Copyright 2023 BlackValentine, All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;