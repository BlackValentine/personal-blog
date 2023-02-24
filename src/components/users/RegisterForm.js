import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm(props) {
  return (
    <div className='flex bg-ghost-white dark:bg-eerie-black p-10 transition-mode'>
      <div className="mx-auto p-7 w-128 bg-white dark:bg-very-dark-gray rounded-3xl shadow-xl transition-mode">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5 dark:text-white transition-mode'>Sign Up</h3>
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="text" placeholder='UserName*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="email" placeholder='Email Address*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="password" placeholder='Password*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="text" placeholder='SecretKey*' />
        <div className="flex items-center">
          <div className="flex items-center">
            <input id='agree-term' type="checkbox" />
            <label htmlFor='agree-term' className='text-sm ml-1 mr-3 cursor-pointer dark:text-very-light-gray transition-mode'>Agree to our</label>
          </div>
          <button className='button-transparent dark:text-white transition-mode'>Terms & Conditions</button>
        </div>
        <button className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-5'>Sign Up</button>
        <div className="flex items-center">
          <div className="mx-auto">
            <span className='text-sm text-spanish-gray mr-2 dark:text-very-light-gray transition-mode'>Already have an account?</span>
            <Link to={'/login'}>
              <button className='button-transparent dark:text-white transition-mode'>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;