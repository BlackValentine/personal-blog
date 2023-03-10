import { createAsyncThunk } from "@reduxjs/toolkit"
import { sendRequest } from "../utils/utils"

export const login = createAsyncThunk(
  "api/user/login",
  (payload, thunkAPI) => {
    const url = `/user/login`
    return sendRequest(url, payload, thunkAPI, 'post')
  }
)

export const logout = createAsyncThunk(
  "api/user/logout",
  (payload, thunkAPI) => {
    const url = `/user/logout`
    return sendRequest(url, payload, thunkAPI, 'post')
  }
)