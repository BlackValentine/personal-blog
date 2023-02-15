import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/error.png';

function NotFound(props) {
  return (
    <div className="flex bg-ghost-white py-24">
      <div className='flex flex-col items-center w-1/3 mx-auto'>
        <img className='mb-3' src={errorImg} alt="error" />
        <h3 className='font-extrabold text-3xl mb-3'>Oops! This page can't be found</h3>
        <p className='text-center text-spanish-gray mb-7'>The page which you are looking for does not exist galley of type and scrambled it to make a type specimen book.</p>
        <Link to={'/'}>
          <button className='bg-pastel-red text-white font-bold text-sm h-full rounded-full py-2 px-5 hover:opacity-80'>Go Back To Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;