import React from 'react';
import CategoryBlogList from '../blogs/CategoryBlogList';
import AboutMeCategory from '../categories/AboutMeCategory';
import HeaderCategory from '../categories/HeaderCategory';
import InstaCategory from '../categories/InstaCategory';
import ListCategory from '../categories/ListCategory';

function CategoryScreen(props) {
  return (
    <div className="bg-ghost-white lg:px-10 px-0">
      <div className="container">
        <HeaderCategory />
      </div>
      <div className="lg:grid lg:grid-cols-5/2 lg:items-start flex flex-col items-center gap-5 container">
        <CategoryBlogList />
        <div className="flex flex-col lg:my-14 my-0 lg:w-auto w-128">
          <AboutMeCategory />
          <ListCategory />
          <InstaCategory />
        </div>
      </div>
    </div>
  );
}

export default CategoryScreen;