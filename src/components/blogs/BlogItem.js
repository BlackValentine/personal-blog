import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpeg';

function BlogItem(props) {
  return (
    <div className='relative bg-white dark:bg-very-dark-gray p-7 rounded-2xl mb-20 transition-mode'>
      <Link to={`/blog/${props.id}`}>
        <div className="relative -mt-14 mb-6 overflow-hidden rounded-xl">
          <img className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-linear h-128 w-full object-cover object-center' src={props.image} alt="" />
        </div>
      </Link>
      <div>
        <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded'>{props.type}</span>
        <Link to={`/blog/${props.id}`}>
          <h3 className='text-black dark:text-white font-bold mt-5 mb-2 text-xl cursor-pointer hover:underline transition-mode'>{props.title}</h3>
        </Link>
        <p className='text-spanish-gray dark:text-light-gray text-base truncate-4-line transition-mode'>{props.subTitle}</p>
        <div className="flex items-center mt-4">
          <img className='w-8 h-8 object-cover object-center rounded-full mr-3' src={avatar} alt="" />
          <span className='text-xs font-semibold dark:text-very-light-gray transition-mode'>Black Valentine</span>
          <div className="w-1 h-1 rounded-full bg-pastel-red mx-3"></div>
          <span className="text-xs font-semibold dark:text-very-light-gray transition-mode">{moment(props?.createdAt).format('LL')}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;