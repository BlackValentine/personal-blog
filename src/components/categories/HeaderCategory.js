import React from 'react';

function HeaderCategory(props) {
  return (
    <div className='pt-10'>
      <div className="flex items-center text-spanish-gray text-sm mb-2">
        <span>Home</span>
        <i class="fas fa-chevron-right mx-3"></i>
        <span>Food</span>
      </div>
      <div className="flex items-center text-3xl font-extrabold mb-3">
        <span className="text-black">Category :</span>
        <span className="text-pastel-red ml-2">Food</span>
      </div>
      <p className="text-spanish-gray max-w-screen-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi saepe perspiciatis fugit</p>
    </div>
  );
}

export default HeaderCategory;