import { configureStore } from '@reduxjs/toolkit'
import blogSlice from '../features/blogSlice'
import generalSlice from '../features/generalSlice'
import userSlice from '../features/userSlice'

export const store = configureStore({
  reducer: {
    general: generalSlice,
    blog: blogSlice,
    user: userSlice
  },
})