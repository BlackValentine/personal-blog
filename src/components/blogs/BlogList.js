import React from 'react';
import BlogItem from './BlogItem';

function BlogList(props) {
  return (
    <div className="container grid grid-cols-3 gap-x-5 pt-24">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}

export default BlogList;