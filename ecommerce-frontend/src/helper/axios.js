import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

console.log(process.env.REACT_APP_API_URL)

const axiosInstances = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json'
    }
});

export default axiosInstances;