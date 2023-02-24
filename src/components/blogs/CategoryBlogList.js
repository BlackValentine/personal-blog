import React from 'react';
import BlogItem from './BlogItem';

function CategoryBlogList(props) {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-x-5 pt-20 lg:!mt-0 !mt-20 sm:!px-0">
      {props.blogs.map((blogItem, index) => {
        return (
          <BlogItem
            key={index}
            image={blogItem.image}
            title={blogItem.title}
            subTitle={blogItem.subTitle}
            type={blogItem.type}
            id={blogItem.id}
            createdAt={blogItem.created_at}
          />
        )
      })}
    </div>
  );
}

export default CategoryBlogList;