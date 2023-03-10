import React from 'react';
import CategoryItem from './CategoryItem';

function ListCategory(props) {
  const categoryList = [
    {
      type: 'Livestyle',
      count: 22
    },
    {
      type: 'Fashion',
      count: 2
    },
    {
      type: 'Technology',
      count: 5
    },
    {
      type: 'Travel',
      count: 13
    },
    {
      type: 'Works',
      count: 20
    },
    {
      type: 'Art and Design',
      count: 10
    }
  ]
  return (
    <div className="flex flex-col bg-white dark:bg-very-dark-gray rounded-xl p-7 mb-5 transition-mode">
      <div className="h-0.5 w-7 mb-1 bg-pastel-red"></div>
      <h3 className="font-bold text-xl mb-3 dark:text-white transition-mode">Category</h3>
      {categoryList.map((categoryItem, index) => {
        return (
          <CategoryItem 
            key={index}
            type={categoryItem.type}
            count={categoryItem.count}
          />
        )
      })}
    </div>
  );
}

export default ListCategory;