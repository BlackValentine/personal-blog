import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLightMode } from '../../features/generalSlice';
import SvgLogo from './SvgLogo';

function Header(props) {
  const dispatch = useDispatch();
  const lightMode = useSelector(state => state.general.lightMode)

  const [onSearch, setOnSearch] = useState(false)

  const handleClickSearchBtn = () => {
    setOnSearch(!onSearch);
  }

  return (
    <div className="container lg:grid lg:grid-cols-3 lg:m-auto flex items-center justify-between !m-0">
      <Link to={"/"}>
        <SvgLogo />
      </Link>
      <nav className='lg:flex z-10 hidden'>
        <ul className='w-full flex items-center justify-between gap-12'>
          <Link to={'/'}>
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap'>Home</li>
          </Link>
          <Link to={'/about'}>
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap'>About me</li>
          </Link>
          <Link to={'/login'}>
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap'>Login</li>
          </Link>
          <Link to={'/category'}>
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap'>Category</li>
          </Link>
          <a href="http://localhost:3001/" target="_blank" rel="noreferrer">
            <li className='font-bold hover:text-pastel-red cursor-pointer transition-colors duration-200 ease-linear whitespace-nowrap'>Resume</li>
          </a>
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
        <div className="relative group">
          <div onClick={handleClickSearchBtn} className={`w-8 h-8 flex border border-solid border-light-gray rounded-full cursor-pointer group-hover:bg-pastel-red ${onSearch ? "bg-pastel-red" : ""}`}>
            <i className={`fas fa-search m-auto group-hover:text-white ${onSearch ? "text-white" : ""}`}></i>
          </div>
          {onSearch
            ?
            <div className="absolute top-11 right-0 z-10 border border-pastel-red rounded-lg search-input">
              <input className='px-3 py-1 rounded-lg text-sm' type="text" placeholder='Search...' />
            </div>
            :
            ""
          }
        </div>
      </div>
    </div>
  );
}

export default Header;