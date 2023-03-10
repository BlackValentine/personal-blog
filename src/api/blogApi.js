import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequest } from '../utils/utils';
import axiosClient from './axiosClient'

const createBlog = (dataBlog) => {
  const url = '/api/blog/create';
  return axiosClient.post(url, {
    title: dataBlog.titleBlog,
    subTitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog,
    type: dataBlog.typeBlog
  })
}

// const getBlog = (blogId) => {
//   const url = `/blog/get-blogs?id=${blogId}`
//   return axiosClient.get(url)
// }

const getBlogPagination = (pageNumber) => {
  const url = `/api/blog?page=${pageNumber}&limit=1`
  return axiosClient.get(url)
}

const editBlog = (dataBlog) => {
  const url = '/api/blog/edit';
  return axiosClient.put(url, {
    id: dataBlog.id,
    title: dataBlog.titleBlog,
    subTitle: dataBlog.subtitleBlog,
    image: dataBlog.imageBlog,
    content: dataBlog.contentBlog,
    rawContent: dataBlog.rawContentBlog,
    type: dataBlog.typeBlog
  })
}

const deleteBlog = (id) => {
  const url = '/api/blog/delete';
  return axiosClient.delete(url, {
    id: id
  })
}

const blogApi = {
  createBlog,
  getBlogPagination,
  editBlog,
  deleteBlog
}

export default blogApi;

export const getAllBlogs = createAsyncThunk(
  "api/blog/all",
  (payload, thunkAPI) => {
      const url = `/api/blog/all`
      return sendRequest(url, payload, thunkAPI, 'get')
  }
)

export const getBlogsPagination = createAsyncThunk(
  "api/blog/all",
  (payload, thunkAPI) => {
      const url = `/api/blog/all`
      return sendRequest(url, payload, thunkAPI, 'get')
  }
)