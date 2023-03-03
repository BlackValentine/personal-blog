import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpeg';
import NotFound from '../general/NotFound';

function BlogDetailScreen(props) {
  const [blog, setBlog] = useState({})
  const { id } = useParams();
  
  const blogs = useSelector(state => state.blog.blogs);

  useEffect(() => {
    const blog = blogs.find(blog => blog.id === id);
    setBlog(blog);
  }, [id, blogs])

  return (
    blog ? <div className="bg-ghost-white">
      <div className="container flex flex-col items-center">
        <h3 className="pt-30 mt-14 mx-auto text-5xl text-center text-pastel-red">{blog?.title}</h3>
        <img
          className="lg:w-24 md:w-20 w-16 lg:h-24 md:h-20 h-16 rounded-full my-5"
          src={avatar}
          alt="author"
        />
        <p className="lg:text-base md:text-sm text-xs uppercase tracking-widest">By <span className="text-pastel-red">Black Valentine</span>, Created on <span className="text-muted-lavender">{moment(blog?.created_at).format('LL')}</span></p>
        <p className="lg:text-base md:text-sm text-xs my-5 text-spanish-gray">
          {blog?.subTitle}
        </p>
        <div
          className="relative w-full pb-half rounded-2xl"
        >
          <img src={blog?.image} alt="blog-img" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl" />
        </div>
        <div
          className="blog-detail__content"
          dangerouslySetInnerHTML={{ __html: `${blog?.content}` }}
        >
        </div>
      </div>
    </div> : <NotFound />
  );
}

export default BlogDetailScreen;