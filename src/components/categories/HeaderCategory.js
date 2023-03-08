import React from 'react';
import { useSearchParams } from 'react-router-dom';

function HeaderCategory(props) {
  const [query] = useSearchParams();
  const currentPage = query.get('type');

  return (
    <div className='pt-10'>
      <div className="flex items-center text-spanish-gray text-sm mb-2">
        <span className='dark:text-very-light-gray transiton-mode'>Home</span>
        <i className="fas fa-chevron-right mx-3 dark:text-very-light-gray transiton-mode"></i>
        <span className='dark:text-very-light-gray transiton-mode'>Category</span>
      </div>
      <div className="flex items-center text-3xl font-extrabold mb-3">
        <span className="text-black dark:text-white transiton-mode">Category :</span>
        <span className="text-pastel-red ml-2">{currentPage ? currentPage : "All"}</span>
      </div>
      <p className="text-spanish-gray max-w-screen-md dark:text-very-light-gray transiton-mode">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit</p>
    </div>
  );
}

export default HeaderCategory;