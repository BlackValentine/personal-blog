import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import blogApi from '../../api/blogApi';
import CategoryBlogList from '../blogs/CategoryBlogList';
import AboutMeCategory from '../categories/AboutMeCategory';
import HeaderCategory from '../categories/HeaderCategory';
import InstaCategory from '../categories/InstaCategory';
import ListCategory from '../categories/ListCategory';

function CategoryScreen(props) {
  const navigate = useNavigate();
  const [query] = useSearchParams();
  const currentPage = query.get('page');

  let listPagination = []
  const [activePage, setActivePage] = useState(+currentPage || 1)
  const [blogs, setBlogs] = useState([])
  const [countPage, setCountPage] = useState(1)

  for (let i = 1; i <= countPage; i++) {
    listPagination.push(i)
  }

  const handleClickPage = (pageItem) => {
    setActivePage(pageItem)
    const path = `/category?page=${pageItem}`
    navigate(path)
  }

  useEffect(() => {
    const getBlogs = async () => {
      const result = await blogApi.getBlogPagination(currentPage ?? 1);
      if (result.data.blogs.length === 0) {
        navigate('/not-found')
      }
      setBlogs(result.data.blogs);
      setCountPage(result.data.count);
    }
    getBlogs().catch(console.error)
  }, [currentPage])

  return (
    <div className="bg-ghost-white dark:bg-eerie-black lg:px-10 px-0 transition-mode">
      <div className="container">
        <HeaderCategory />
      </div>
      <div className="lg:grid lg:grid-cols-5/2 lg:items-start flex flex-col items-center gap-5 container">
        <div className="flex flex-col items-center">
          <CategoryBlogList blogs={blogs} />
          <div className="flex pb-14">
            <div className='flex items-center gap-3 mx-auto'>
              {listPagination.map(pageItem => {
                return (
                  <div className="group" key={pageItem} onClick={() => handleClickPage(pageItem)}>
                    <div className={`flex w-11 h-11 border border-solid border-pastel-red rounded-full group-hover:bg-pastel-red cursor-pointer ${pageItem === activePage ? "bg-pastel-red" : "bg-transition"}`}>
                      <span className={`m-auto group-hover:text-white ${pageItem === activePage ? "text-white" : "text-pastel-red"}`}>{pageItem}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
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