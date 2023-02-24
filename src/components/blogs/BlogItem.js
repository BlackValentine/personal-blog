import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpeg';

function BlogItem(props) {
  return (
    <div className='relative bg-white p-7 rounded-2xl mb-20'>
      <Link to={`/blog/${props.id}`}>
        <div className="relative -mt-14 mb-6 overflow-hidden rounded-xl">
          <img className='cursor-pointer hover:scale-110 transition-transform duration-300 ease-linear h-128 w-full object-cover object-center' src={props.image} alt="" />
        </div>
      </Link>
      <div>
        <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded'>{props.type}</span>
        <Link to={`/blog/${props.id}`}>
          <h3 className='text-black font-bold mt-5 mb-2 text-xl cursor-pointer hover:underline'>{props.title}</h3>
        </Link>
        <p className='text-spanish-gray text-base truncate-4-line'>{props.subTitle}</p>
        <div className="flex items-center mt-4">
          <img className='w-8 h-8 object-cover object-center rounded-full mr-3' src={avatar} alt="" />
          <span className='text-xs font-semibold'>Black Valentine</span>
          <div className="w-1 h-1 rounded-full bg-pastel-red mx-3"></div>
          <span className="text-xs font-semibold">{moment(props?.createdAt).format('LL')}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;