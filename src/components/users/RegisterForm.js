import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterForm(props) {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      secretKey: "",
      terms: false
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(8, "Mininum 8 characters")
        .max(16, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
      secretKey: Yup.string()
        .oneOf(["blackvalentine"], "Wrong SecretKey")
        .required("Required!"),
      terms: Yup.boolean().oneOf([true], 'Should be agree'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <div className='flex bg-ghost-white dark:bg-eerie-black p-10 transition-mode'>
      <div className="mx-auto p-7 w-128 bg-white dark:bg-very-dark-gray rounded-3xl shadow-xl transition-mode">
        <div className="w-8 h-1 bg-pastel-red mb-1"></div>
        <h3 className='font-extrabold text-2xl mb-5 dark:text-white transition-mode'>Sign Up</h3>
        <div className="mb-5">
          <input
            name="userName"
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="text"
            placeholder='UserName*'
            value={formik.values.userName}
            onChange={formik.handleChange}
          />
          {formik.errors.userName && formik.touched.userName && (
            <p className='ml-1 text-strong-red font-semibold text-xs'>{formik.errors.userName}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            name="email"
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="email"
            placeholder='Email Address*'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className='ml-1 text-strong-red font-semibold text-xs'>{formik.errors.email}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            name="password"
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="password"
            placeholder='Password*'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className='mb-5 ml-1 text-strong-red font-semibold text-xs'>{formik.errors.password}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            name="confirmPassword"
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="password"
            placeholder='Confirm Password*'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className='mb-5 ml-1 text-strong-red font-semibold text-xs'>{formik.errors.confirmPassword}</p>
          )}
        </div>
        <div className="mb-5">
          <input
            name="secretKey"
            className='w-full px-5 py-3 mb-1 rounded-xl border border-solid border-very-light-gray dark:border-spanish-gray shadow bg-ghost-white dark:bg-very-dark-gray dark:hover:bg-eerie-black text-sm text-black-russian dark:text-white transition-mode'
            type="text"
            placeholder='SecretKey*'
            value={formik.values.secretKey}
            onChange={formik.handleChange}
          />
          {formik.errors.secretKey && formik.touched.secretKey && (
            <p className='mb-5 ml-1 text-strong-red font-semibold text-xs'>{formik.errors.secretKey}</p>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <input 
              name="terms" 
              id='agree-term' 
              type="checkbox" 
              value={formik.values.terms}
              onChange={formik.handleChange}
            />
            <label htmlFor='agree-term' className='text-sm ml-1 mr-3 cursor-pointer dark:text-very-light-gray transition-mode'>Agree to our</label>
          </div>
          <button className='button-transparent dark:text-white transition-mode'>Terms & Conditions</button>
        </div>
        {formik.errors.terms && formik.touched.terms && (
          <p className='ml-1 text-strong-red font-semibold text-xs'>{formik.errors.terms}</p>
        )}
        <button
          type="button"
          className='w-full p-2 rounded-full bg-pastel-red text-white text-sm my-5'
          onClick={formik.handleSubmit}
        >Sign Up</button>
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