import { configureStore } from '@reduxjs/toolkit'
import blogSlice from '../features/blogSlice'
import generalSlice from '../features/generalSlice'

export const store = configureStore({
  reducer: {
    general: generalSlice,
    blog: blogSlice,
  },
})