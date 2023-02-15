import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lightMode: true,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLightMode: (state, action) => {
      state.lightMode = action.payload
    }
  },
})

export const {
  setLightMode
} = generalSlice.actions;

export default generalSlice.reducer