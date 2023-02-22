import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { BASE_URL } from "./constant";

axios.defaults.baseURL = BASE_URL;
export const sendRequest = (url, payload, thunkAPI, method = "POST", isLoading = true) => {
    let requestObj = {
        method: method,
        url: url,
        data: payload
    };
    if (method.toLowerCase() === "get") {
        requestObj = {
            method: method,
            url: url,
            params: payload
        }
    }
    try {
        if (isLoading) {
            return trackPromise(
                axios(requestObj)
                    .then(res => res.data)
            )
        }
        return axios(requestObj)
            .then(res => res.data)
    } catch (e) {
        console.error(e)
    }
}