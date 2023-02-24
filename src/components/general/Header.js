import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLightMode } from '../../features/generalSlice';
import SvgLogo from './SvgLogo';
import './Header.scss';

function Header(props) {
  const dispatch = useDispatch();
  const lightMode = useSelector(state => state.general.lightMode)

  console.log(lightMode)

  const [onSearch, setOnSearch] = useState(false);
  const [onMenu, setOnMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        setNavScroll(true)
      }
      else {
        setNavScroll(false)
      }
    }
  })

  const handleClickSearchBtn = () => {
    setOnSearch(!onSearch);
  }

  const handleClickMenuBtn = () => {
    setOnMenu(!onMenu);
  }

  const handleClickChangeMode = () => {
    dispatch(setLightMode(!lightMode))
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-very-dark-gray shadow-md transition-mode">
      <div className="container lg:grid lg:grid-cols-3 lg:m-auto flex items-center justify-between lg:!mx-auto !m-0">
        <Link to={"/"}>
          <SvgLogo />
        </Link>

        <nav className="z-10 lg:flex hidden">
          <ul className='w-full flex items-center justify-between gap-12'>
            <Link to={'/'}>
              <li className='font-bold dark:text-white hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap transition-mode'>Home</li>
            </Link>
            <Link to={'/about'}>
              <li className='font-bold dark:text-white hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap transition-mode'>About me</li>
            </Link>
            <Link to={'/login'}>
              <li className='font-bold dark:text-white hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap transition-mode'>Login</li>
            </Link>
            <Link to={'/category'}>
              <li className='font-bold dark:text-white hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap transition-mode'>Category</li>
            </Link>
            <a href="https://resume-fe-nu.vercel.app/" target="_blank" rel="noreferrer">
              <li className='font-bold dark:text-white hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap transition-mode'>Resume</li>
            </a>
          </ul>
        </nav>

        <nav style={{ top: '74px' }} className={`absolute left-0 bg-white dark:bg-very-dark-gray w-full border-t border-solid border-pastel-red shadow-md z-10 ${onMenu ? 'lg:invisible visible' : 'invisible'}`}>
          <ul className='w-full flex flex-col items-center justify-between gap-6 py-3'>
            <Link to={'/'}>
              <li
                onClick={handleClickMenuBtn}
                className='nav-item font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap dark:text-white'
              >
                <span>Home</span>
                <div className="nav-item__underline h-0.5 w-full bg-pastel-red"></div>
              </li>
            </Link>
            <Link to={'/about'}>
              <li
                onClick={handleClickMenuBtn}
                className='nav-item font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap dark:text-white'
              >
                <span>About Me</span>
                <div className="nav-item__underline h-0.5 w-full bg-pastel-red"></div>
              </li>
            </Link>
            <Link to={'/login'}>
              <li
                onClick={handleClickMenuBtn}
                className='nav-item font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap dark:text-white'
              >
                <span>Login</span>
                <div className="nav-item__underline h-0.5 w-full bg-pastel-red"></div>
              </li>
            </Link>
            <Link to={'/category'}>
              <li
                onClick={handleClickMenuBtn}
                className='nav-item font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap dark:text-white'
              >
                <span>Category</span>
                <div className="nav-item__underline h-0.5 w-full bg-pastel-red"></div>
              </li>
            </Link>
            <a href="https://resume-fe-nu.vercel.app/" target="_blank" rel="noreferrer">
              <li
                onClick={handleClickMenuBtn}
                className='nav-item font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap dark:text-white'
              >
                <span>Resume</span>
                <div className="nav-item__underline h-0.5 w-full bg-pastel-red"></div>
              </li>
            </a>
          </ul>
        </nav>

        <div className="flex items-center justify-end">
          <div className="group mr-2">
            <div
              className="w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red"
              onClick={handleClickChangeMode}
            >
              {lightMode ? <i className="fas fa-sun m-auto group-hover:text-white"></i> : <i className="fas fa-moon m-auto group-hover:text-white dark:text-white transition-mode"></i>}
            </div>
          </div>
          <div className="relative group mr-2">
            <div onClick={handleClickSearchBtn} className={`w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red ${onSearch ? "bg-pastel-red" : ""}`}>
              <i className={`fas fa-search m-auto group-hover:text-white dark:text-white ${onSearch ? "text-white" : ""}`}></i>
            </div>
            {onSearch
              ?
              <div className="absolute top-11 right-0 z-10 border border-pastel-red rounded-lg search-input">
                <input className='px-3 py-1 rounded-lg text-sm dark:bg-black dark:text-white' type="text" placeholder='Search...' />
              </div>
              :
              ""
            }
          </div>
          <div className="group mr-2 lg:hidden block">
            <div onClick={handleClickMenuBtn} className={`w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red ${onMenu ? "bg-pastel-red" : ""}`}>
              <i className={`fas fa-bars m-auto group-hover:text-white dark:text-white ${onMenu ? "text-white" : ""}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;