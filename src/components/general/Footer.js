import React from 'react';

function Footer(props) {
  return (
    <div className='bg-eerie-black dark:bg-very-dark-gray transition-mode'>
      <div className="container">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <h6 className='text-white text-center font-bold text-3xl pt-14 mb-3'>Get The Best Blog Stories Into Your Inbox!</h6>
          <p className="text-light-gray text-base mb-7">Sign up for free and be the first to get notified about new posts.</p>
          <div className="flex items-center h-11 w-full mb-10">
            <input 
              className='w-full h-full pl-4 rounded-tl-full rounded-bl-full dark:bg-very-dark-gray dark:text-white dark:hover:bg-black transition-mode border border-solid border-spanish-gray' 
              type="text" 
              placeholder='Your email address' 
            />
            <button className='flex bg-pastel-red text-white font-bold text-base h-full px-5 rounded-tr-full rounded-br-full'>
              <span className='m-auto'>Subscribe</span>
            </button>
          </div>
          <ul className='flex items-center gap-5 mb-10'>
            <li>
              <a className='flex items-center gap-1 text-light-gray hover:text-pastel-red transition-color duration-300 ease-linear' href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a className='flex items-center gap-1 text-light-gray hover:text-pastel-red transition-color duration-300 ease-linear' href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a className='flex items-center gap-1 text-light-gray hover:text-pastel-red transition-color duration-300 ease-linear' href="https://github.com/">
                <i className="fab fa-github"></i>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a className='flex items-center gap-1 text-light-gray hover:text-pastel-red transition-color duration-300 ease-linear' href='https://www.linkedin.com/'>
                <i className="fab fa-linkedin-in"></i>
                <span>Linkedin</span>
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