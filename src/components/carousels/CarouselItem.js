import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpeg';
import "../../index.css";

function CarouselItem(props) {
  return (
    <div className='slider-item'>
      <img src={props.image} alt="" className='carousel-item__image w-full h-150 object-cover object-center relative' />
      <div className="absolute inset-0 w-full h-150 bg-black/60">
        <div className="container absolute left-1/2 -translate-x-2/4 top-1/2 -translate-y-1/2 !mx-10">
          <div className="lg:mb-10 mb-4">
            <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded-full'>{props.type}</span>
          </div>
          <Link to={`/blog/${props.id}`}>
            <h3 className="mb-3 font-bold lg:text-4xl text-2xl text-white lg:w-1/2 w-3/4 truncate-2-line">{props.title}</h3>
          </Link>
          <p className='lg:text-xl text-base text-light-gray lg:w-1/2 w-3/4 truncate-2-line'>{props.subTitle}</p>
          <div className="flex items-center mt-4">
            <img className='w-8 h-8 object-cover object-center rounded-full mr-3' src={avatar} alt="" />
            <span className='text-xs font-semibold text-white'>Black Valentine</span>
            <div className="w-1 h-1 rounded-full bg-pastel-red mx-3"></div>
            <span className="text-xs font-semibold text-white">{moment(props?.createdAt).format('LL')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;