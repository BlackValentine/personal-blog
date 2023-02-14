import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm(props) {
  return (
    <div className='flex bg-ghost-white p-10'>
      <div className="mx-auto p-7 w-1/4 bg-white rounded-3xl shadow-xl">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5'>Login</h3>
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="text" placeholder='UserName*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="password" placeholder='Password*' />
        <div className="flex items-center">
          <div className="flex items-center">
            <input id='remember-me' type="checkbox" />
            <label htmlFor='remember-me' className='text-sm ml-1 mr-3'>Remember Me</label>
          </div>
          <button className='button-transparent'>Forgot Password?</button>
        </div>
        <button className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-5'>Login Now</button>
        <div className="flex items-center">
          <div className="mx-auto">
            <span className='text-sm text-spanish-gray mr-2'>Don't have an account</span>
            <Link to={'/register'}>
              <button className='button-transparent'>Create One?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;