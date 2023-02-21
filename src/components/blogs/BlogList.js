import React from 'react';
import BlogItem from './BlogItem';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import blog4 from '../../assets/images/blog4.jpg';
import blog5 from '../../assets/images/blog5.jpg';
// import blog6 from '../../assets/images/blog6.jpg';
import blog6 from '../../assets/images/aboutme1.jpeg';

function BlogList(props) {
  const blogList = [
    {
      image: blog1,
      title: '5 Effective Ways I’m Finding Focus in a Busy Season of Life',
      type: 'Fashion',
    },
    {
      image: blog2,
      title: 'Get the Most Out of Iceland with our 10 Travel Tips',
      type: 'Livestyle',
    },
    {
      image: blog3,
      title: '7 Holiday Decor Ideas and Exactly What I Love About Each One',
      type: 'Home',
    },
    {
      image: blog4,
      title: '7 Holiday Decor Ideas and Exactly What I Love About Each One',
      type: 'Technology',
    },
    {
      image: blog5,
      title: 'What Are Your Tips for Hosting an Easy Birthday Party?',
      type: 'Food',
    },
    {
      image: blog6,
      title: '5 Effective Ways I’m Finding Focus in a Busy Season of Life',
      type: 'Fashion',
    },
  ]
  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 lg:pt-24 !pt-20">
      {blogList.map((blogItem, index) => {
        return (
          <BlogItem
            key={index}
            image={blogItem.image}
            title={blogItem.title}
            type={blogItem.type}
          />
        )
      })}
    </div>
  );
}

export default BlogList;