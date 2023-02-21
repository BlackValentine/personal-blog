import { useState } from 'react';

function Pagination(props) {
  const listPageNumber = [1, 2, 3, 4];
  const [activePage, setActivePage] = useState(1)

  const handleClickPage = (pageItem) => {
    setActivePage(pageItem)
  }

  return (
    <div className="flex pb-14">
      <div className='flex items-center gap-3 mx-auto'>
        {listPageNumber.map(pageItem => {
          return (
            <div className="group" key={pageItem} onClick={() => handleClickPage(pageItem)}>
              <div className={`flex w-11 h-11 border border-solid border-pastel-red rounded-full group-hover:bg-pastel-red cursor-pointer ${pageItem === activePage ? "bg-pastel-red" : "bg-white"}`}>
                <span className={`m-auto group-hover:text-white ${pageItem === activePage ? "text-white" : "text-pastel-red"}`}>{pageItem}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Pagination;