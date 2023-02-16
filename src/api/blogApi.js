import axiosClient from './axiosClient'

const createBlog = (dataBlog) => {
  const url = '/blog/create';
  return axiosClient.post(url, {
    title: dataBlog.titleBlog,
    subTitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog
  })
}

// const getBlog = (blogId) => {
//   const url = `/blog/get-blogs?id=${blogId}`
//   return axiosClient.get(url)
// }

const editBlog = (dataBlog) => {
  const url = '/blog/edit';
  return axiosClient.put(url, {
    id: dataBlog.id,
    title: dataBlog.titleBlog,
    subTitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog
  })
}

const deleteBlog = (id) => {
  const url = '/blog/delete';
  return axiosClient.delete(url, {
    id: id
  })
}

const blogApi = {
  createBlog,
  // getBlog,
  editBlog,
  deleteBlog
}

export default blogApi;