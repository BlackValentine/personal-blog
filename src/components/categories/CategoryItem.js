import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
  return (
    <div className="flex items-center justify-between bg-ghost-white dark:bg-eerie-black rounded-lg px-5 py-4 mb-3 transition-mode">
      <Link to={`/category?type=${props.type}`}>
        <span className='px-3 py-1.5 bg-pastel-red text-white font-bold text-sm rounded-full cursor-pointer hover:opacity-80'>{props.type}</span>
      </Link>
      <span className='text-spanish-gray dark:text-very-light-gray text-sm font-bold transition-mode'>{props.count} posts</span>
    </div>
  );
}

export default CategoryItem;