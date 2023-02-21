import React from 'react';
import avatar from '../../assets/images/avatar.jpeg';
import blog1 from '../../assets/images/blog2.jpg';

function BlogDetailScreen(props) {
  return (
    <div className="bg-ghost-white">
      <div className="container flex flex-col items-center">
        <div className="pt-30 mt-7 mx-auto text-3xl text-center">Black Valentine</div>
        <img
          className="lg:w-24 md:w-20 w-16 lg:h-24 md:h-20 h-16 rounded-full my-5"
          src={avatar}
          alt="author"
        />
        <div className="lg:text-base md:text-sm text-xs uppercase">By Black Valentine, Updated on 11/12/2023</div>
        <div className="lg:text-base md:text-sm text-xs my-5">Hello, My name is Black Valentime</div>
        <div
          className="relative w-full pb-one-third rounded-2xl"
        >
          <img src={blog1} alt="blog-img" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"/>
        </div>
        <div
          className="blog-detail__content"
        // dangerouslySetInnerHTML={{ __html: `${blogData?.content}` }}
        ></div>
      </div>
    </div>
  );
}

export default BlogDetailScreen;