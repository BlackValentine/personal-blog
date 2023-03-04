import React from 'react';
import BlogItem from './BlogItem';

function BlogList(props) {
  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 lg:pt-24 !pt-20">
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
            content={blogItem.content}
            rawContent={blogItem.rawContent}
          />
        )
      })}
    </div>
  );
}

export default BlogList;