import axios from "axios";

import { API_URL } from "./consts";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};
