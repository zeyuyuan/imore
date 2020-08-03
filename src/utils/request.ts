import axios from 'axios'
import {LocalsFlag} from "../enum";

const request = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 10000
})

// request interceptor
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem(LocalsFlag.token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
