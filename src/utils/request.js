import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Default server URL
const serverUrl = "https://lsc.zhyl2022.xyz";

// Axios instance configuration
const instance = axios.create({
  baseURL: serverUrl,
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const tokenData = sessionStorage.getItem("counter");
    const getToken = tokenData ? JSON.parse(tokenData) : null;

    if (getToken?.inFod?.token) {
      config.headers.Authorization = `Bearer ${getToken.inFod.token}`;
    }

    NProgress.start();
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

// HTTP methods
const get = (url, params) => instance.get(url, { params });

const post = (url, data) => instance.post(url, data);

const postImg = (url, data) =>
  instance.post(url, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

const put = (url, data) =>
  instance.put(url, data, {
    headers: { "Content-Type": "application/json" },
  });

export { post, get, put, postImg, serverUrl };
