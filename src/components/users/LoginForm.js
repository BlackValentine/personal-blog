import React from 'react';
import { Link } from 'react-router-dom';
import './Users.scss';

function LoginForm(props) {
  return (
    <div className='flex bg-ghost-white dark:bg-eerie-black py-20 transition-mode'>
      <div className="m-auto p-7 w-128 bg-white dark:bg-very-dark-gray rounded-3xl shadow-xl transition-mode">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5 dark:text-white transition-mode'>Login</h3>
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="text" placeholder='UserName*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="password" placeholder='Password*' />
        <div className="flex items-center">
          <div className="flex items-center">
            <input id='remember-me' type="checkbox" />
            <label htmlFor='remember-me' className='text-sm ml-1 mr-3 cursor-pointer dark:text-very-light-gray transition-mode'>Remember Me</label>
          </div>
          <Link to={'/reset'}>
            <button className='button-transparent dark:text-white transition-mode'>Forgot Password?</button>
          </Link>
        </div>
        <button className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-5'>Login Now</button>
        <div className="flex items-center">
          <div className="mx-auto">
            <span className='text-sm text-spanish-gray mr-2 dark:text-very-light-gray transition-mode'>Don't have an account</span>
            <Link to={'/register'}>
              <button className='button-transparent dark:text-white transition-mode'>Create One?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;