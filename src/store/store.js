import { configureStore } from '@reduxjs/toolkit'
import generalSlice from '../features/generalSlice'

export const store = configureStore({
  reducer: {
    general: generalSlice,
  },
})