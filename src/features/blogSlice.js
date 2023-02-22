import { createSlice } from '@reduxjs/toolkit'
import { getAllBlogs } from '../api/blogApi';

const initialState = {
  blogs: [],
}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
    }
  }
})

// export const { } = blogSlice.actions;

export default blogSlice.reducer