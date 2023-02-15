import React from 'react';
import { Link } from 'react-router-dom';

function RegisterForm(props) {
  return (
    <div className='flex bg-ghost-white p-10'>
      <div className="mx-auto p-7 w-1/4 bg-white rounded-3xl shadow-xl">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5'>Sign Up</h3>
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="text" placeholder='UserName*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="email" placeholder='Email Address*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="password" placeholder='Password*' />
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="text" placeholder='SecretKey*' />
        <div className="flex items-center">
          <div className="flex items-center">
            <input id='agree-term' type="checkbox" />
            <label htmlFor='agree-term' className='text-sm ml-1 mr-3'>Agree to our</label>
          </div>
          <button className='button-transparent'>Terms & Conditions</button>
        </div>
        <button className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-5'>Sign Up</button>
        <div className="flex items-center">
          <div className="mx-auto">
            <span className='text-sm text-spanish-gray mr-2'>Already have an account?</span>
            <Link to={'/login'}>
              <button className='button-transparent'>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;