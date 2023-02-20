import React from 'react';

function ListCategory(props) {
  return (
    <div className="flex flex-col bg-white rounded-xl p-7 mb-5">
      <div className="h-0.5 w-7 mb-1 bg-pastel-red"></div>
      <h3 className="font-bold text-xl mb-3">Category</h3>
      <div className="flex items-center justify-between bg-ghost-white rounded-lg px-5 py-4 mb-3">
        <span className='px-3 py-1 bg-pastel-red text-white font-bold text-sm rounded-full cursor-pointer hover:opacity-80'>Livestyle</span>
        <span className='text-spanish-gray text-sm font-bold'>22 posts</span>
      </div>
      <div className="flex items-center justify-between bg-ghost-white rounded-lg px-5 py-4 mb-3">
        <span className='px-3 py-1 bg-pastel-red text-white font-bold text-sm rounded-full cursor-pointer hover:opacity-80'>Fashion</span>
        <span className='text-spanish-gray text-sm font-bold'>22 posts</span>
      </div>
      <div className="flex items-center justify-between bg-ghost-white rounded-lg px-5 py-4 mb-3">
        <span className='px-3 py-1 bg-pastel-red text-white font-bold text-sm rounded-full cursor-pointer hover:opacity-80'>Technology</span>
        <span className='text-spanish-gray text-sm font-bold'>22 posts</span>
      </div>
      <div className="flex items-center justify-between bg-ghost-white rounded-lg px-5 py-4 mb-3">
        <span className='px-3 py-1 bg-pastel-red text-white font-bold text-sm rounded-full cursor-pointer hover:opacity-80'>Travel</span>
        <span className='text-spanish-gray text-sm font-bold'>22 posts</span>
      </div>
      <div className="flex items-center justify-between bg-ghost-white rounded px-5 py-4 mb-3">
        <span className='px-3 py-1 bg-pastel-red text-white font-bold text-sm rounded-full cursor-pointer hover:opacity-80'>Works</span>
        <span className='text-spanish-gray text-sm font-bold'>22 posts</span>
      </div>
    </div>
  );
}

export default ListCategory;