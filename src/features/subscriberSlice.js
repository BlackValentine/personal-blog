import { createSlice } from '@reduxjs/toolkit'
import { addNewSubscriber } from '../api/subscriberApi'


const initialState = {
  subscriber: ''
}

export const userSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {},
  extraReducers: {
    [addNewSubscriber.fulfilled]: (state, action) => {
      state.subscriber = action.payload;
    },
  }
})

// export const { } = userSlice.actions;

export default userSlice.reducer