import React from 'react';
import { useState } from 'react';
import SvgLogo from './SvgLogo';

function Header(props) {
  const [lightMode, setLightMode] = useState(true)
  return (
    <div className="container grid grid-cols-3 m-auto">
      <SvgLogo />
      <nav>
        <ul className='flex items-center gap-4'>
          <li className='font-bold'>About me</li>
          <li className='font-bold'>Login</li>
          <li className='font-bold'>Blogs</li>
          <li className='font-bold'>404 Page</li>
        </ul>
      </nav>

      <div className="flex items-center">
        <div className="group mr-2">
          <div
            className="w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red"
            onClick={() => setLightMode(!lightMode)}
          >
            {lightMode ? <i className="fas fa-sun m-auto group-hover:text-white"></i> : <i className="fas fa-moon m-auto group-hover:text-white"></i>}
          </div>
        </div>
        <div className="group">
          <div className="w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red">
            <i className="fas fa-search m-auto group-hover:text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;