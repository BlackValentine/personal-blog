import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BlogList from '../blogs/BlogList';
import CarouselSection from '../carousels/CarouselSection';

function HomeScreen(props) {
  const allBlogs = useSelector(state => state.blog.blogs);

  const [limit, setLimit] = useState(6);
  const [blogsShow, setBlogsShow] = useState(allBlogs.slice(0, limit))

  const handleReadMore = (number) => {
    setLimit(limit + number);
  }

  useEffect(() => {
    setBlogsShow(allBlogs.slice(0, limit))
  }, [allBlogs, limit])

  return (
    <div>
      <CarouselSection />
      <div className="bg-ghost-white dark:bg-eerie-black transition-mode">
        <BlogList blogs={blogsShow} />
        <div className={`${limit >= allBlogs.length ? 'hidden' : 'flex'} pb-10`}>
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