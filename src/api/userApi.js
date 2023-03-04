import { createAsyncThunk } from "@reduxjs/toolkit"
import { sendRequest } from "../utils/utils"

export const getAllBlogs = createAsyncThunk(
  "api/user/login",
  (payload, thunkAPI) => {
      const url = `/user/login`
      return sendRequest(url, payload, thunkAPI, 'get')
  }
)