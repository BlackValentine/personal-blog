import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true
});

export const isSuccessStatusCode = (s) => {
    // May be string or number
    const statusType = typeof s;
    return (statusType === 'number' && s === 0) || (statusType === 'string' && s.toUpperCase() === 'OK');
};

export default instance;