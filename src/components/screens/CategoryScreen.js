import React from 'react';
import CategoryBlogList from '../blogs/CategoryBlogList';
import AboutMeCategory from '../categories/AboutMeCategory';
import HeaderCategory from '../categories/HeaderCategory';
import InstaCategory from '../categories/InstaCategory';
import ListCategory from '../categories/ListCategory';

function CategoryScreen(props) {
  return (
    <div className="bg-ghost-white">
      <div className="container">
        <HeaderCategory />
      </div>
      <div className="grid grid-cols-5/2 gap-5 container">
        <CategoryBlogList />
        <div className="flex flex-col my-14">
          <AboutMeCategory />
          <ListCategory />
          <InstaCategory />
        </div>
      </div>
    </div>
  );
}

export default CategoryScreen;