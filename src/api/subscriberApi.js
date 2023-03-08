import { createAsyncThunk } from "@reduxjs/toolkit"
import { sendRequest } from "../utils/utils"

export const addNewSubscriber = createAsyncThunk(
  "api/subscriber",
  (payload, thunkAPI) => {
    const url = `/subscriber`
    return sendRequest(url, payload, thunkAPI, 'POST')
  }
)

export const getAllSubscribers = createAsyncThunk(
  "api/subscriber",
  (payload, thunkAPI) => {
    const url = `/subscriber`
    return sendRequest(url, payload, thunkAPI, 'GET')
  }
)