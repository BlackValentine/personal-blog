import React from 'react';
import { Link } from 'react-router-dom';

function ResetPasswordForm(props) {
  return (
    <div className='flex bg-ghost-white p-10'>
      <div className="mx-auto p-7 w-128 bg-white rounded-3xl shadow-xl">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5'>Reset Password</h3>
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray shadow bg-ghost-white text-sm text-black-russian' type="email" placeholder='Email*' />
        <button className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-2'>Submit</button>
        <div className="flex items-center">
          <div className="mx-auto">
            <Link to={'/login'}>
              <button className='button-transparent'>Back to login?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;