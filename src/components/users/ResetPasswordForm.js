import React from 'react';
import { Link } from 'react-router-dom';
import './Users.scss';

function ResetPasswordForm(props) {
  return (
    <div className='flex bg-ghost-white dark:bg-eerie-black height-fit transition-mode'>
      <div className="m-auto p-7 w-128 bg-white dark:bg-very-dark-gray rounded-3xl shadow-xl transition-mode">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5 dark:text-white transition-mode'>Reset Password</h3>
        <input className='w-full px-5 py-3 mb-5 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode' type="email" placeholder='Email*' />
        <button className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-2'>Submit</button>
        <div className="flex items-center">
          <div className="mx-auto">
            <Link to={'/login'}>
              <button className='button-transparent dark:text-white transition-mode'>Back to login?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;