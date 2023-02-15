import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLightMode } from '../../features/generalSlice';
import SvgLogo from './SvgLogo';

function Header(props) {
  const dispatch = useDispatch();
  const lightMode = useSelector(state => state.general.lightMode)

  return (
    <div className="container grid grid-cols-3 m-auto">
      <SvgLogo />
      <nav className='flex ml-10'>
        <ul className='flex items-center gap-12 justify-evenly'>
          <Link to={'/about'}>
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear'>About me</li>
          </Link>
          <Link to={'/login'}>
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear'>Login</li>
          </Link>
          <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear'>Blogs</li>
          <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear'>404 Page</li>
        </ul>
      </nav>

      <div className="flex items-center justify-end">
        <div className="group mr-2">
          <div
            className="w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red"
            onClick={() => dispatch(setLightMode(!lightMode))}
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