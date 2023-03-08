import React from 'react';
import { Link } from 'react-router-dom';
import './Users.scss';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { login } from '../../api/userApi';

function LoginForm(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .required("Required!"),
    }),
    onSubmit: async (values) => {
      await dispatch(login(values));
      window.location.href="/"
    },
  });

  return (
    <div className='flex bg-ghost-white dark:bg-eerie-black py-20 transition-mode'>
      <div className="m-auto p-7 w-128 bg-white dark:bg-very-dark-gray rounded-3xl shadow-xl transition-mode">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5 dark:text-white transition-mode'>Login</h3>
        <div className="mb-5">
          <input
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="email"
            placeholder='Email*'
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className='ml-1 text-strong-red font-semibold text-xs'>{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="password"
            placeholder='Password*'
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className='ml-1 text-strong-red font-semibold text-xs'>{formik.errors.password}</p>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <input id='remember-me' type="checkbox" />
            <label htmlFor='remember-me' className='text-sm ml-1 mr-3 cursor-pointer dark:text-very-light-gray transition-mode'>Remember Me</label>
          </div>
          <Link to={'/reset'}>
            <button className='button-transparent dark:text-white transition-mode'>Forgot Password?</button>
          </Link>
        </div>
        <button 
          className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-5' 
          type="button" 
          onClick={formik.handleSubmit}
        >Login Now</button>
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