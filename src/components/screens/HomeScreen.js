import React from 'react';
import BlogList from '../blogs/BlogList';
import CarouselSection from '../carousels/CarouselSection';
import Pagination from '../general/Pagination';

function HomeScreen(props) {
  return (
    <div>
      <CarouselSection />
      <div className="bg-ghost-white">
        <BlogList />
        <Pagination />
      </div>
    </div>
  );
}

export default HomeScreen;