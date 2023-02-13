import React from 'react';

function Pagination(props) {
  const listPageNumber = [1, 2, 3, 4];

  return (
    <div className="flex pb-14">
      <div className='flex items-center gap-3 mx-auto'>
        {listPageNumber.map(pageItem => {
          return (
            <div className="group" key={pageItem}>
              <div className="flex w-11 h-11 border border-solid border-pastel-red bg-white rounded-full group-hover:bg-pastel-red cursor-pointer">
                <span className='m-auto text-pastel-red group-hover:text-white'>{pageItem}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Pagination;