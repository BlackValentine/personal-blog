import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BlogList from '../blogs/BlogList';
import CarouselSection from '../carousels/CarouselSection';

function HomeScreen(props) {
  const blogs = useSelector(state => state.blog.blogs);

  const [limit, setLimit] = useState(6);
  const [blogsShow, setBlogsShow] = useState(blogs.slice(0, limit) ?? [])

  const handleReadMore = (number) => {
    setLimit(limit + number);
  }

  useEffect(() => {
    setBlogsShow(blogs.slice(0, limit))
  }, [blogs, limit])

  return (
    <div>
      <CarouselSection />
      <div className="bg-ghost-white dark:bg-eerie-black transition-mode">
        <BlogList blogs={blogsShow} />
        <div className={`${limit >= blogs.length ? 'hidden' : 'flex'} pb-10`}>
          <button
            className="mx-auto bg-pastel-red text-white font-bold text-base h-full py-3 px-5 rounded-full hover:opacity-80"
            onClick={() => handleReadMore(6)}
          >Read more</button>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;