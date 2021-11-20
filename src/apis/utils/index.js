import axios from 'axios'

const BASE_URL = 'http://ec2-3-36-132-160.ap-northeast-2.compute.amazonaws.com:8080';

const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options })
  return instance
}

export const defaultInstance = axiosApi(BASE_URL)
