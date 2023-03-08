import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { login, logout } from '../api/userApi'

const initialState = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload) {
        if (action.payload.accessToken) {
          let { accessToken, refreshToken, userName, email } = action.payload
          localStorage.setItem('accessTokenLava', accessToken)
          localStorage.setItem('refreshTokenLava', refreshToken)
          localStorage.setItem('user', JSON.stringify({
            userName: userName,
            email: email
          }))
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        }
      }
    },
    [logout.fulfilled]: (state, action) => {
      localStorage.removeItem('accessTokenLava')
      localStorage.removeItem('refreshTokenLava')
      localStorage.removeItem('user')
    }
  }
})

// export const { } = userSlice.actions;

export default userSlice.reducer