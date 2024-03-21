import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// console.log(getToken.inFod.token);
//默认全局请求头
const serverUrl = "https://lsc.zhyl2022.xyz";

// axios.defaults.headers.common['Authorization'] ='application/json;

const data = {
  headers: {
    Accept: `application/json`,
  },

  timeout: 5000,
  baseURL: serverUrl,
}

const instance = axios.create(data);

// 请求拦截
instance.interceptors.request.use(
  function (config) {
    // 成功
    let getToken = JSON.parse(sessionStorage.getItem('counter'))

    if (getToken != null) {
      // console.log(111);
      const serverToKen = `Bearer ${getToken.inFod.token}`;
      config.headers['Authorization'] = serverToKen;

    } else {
      NProgress.start();
      return config
    }
    NProgress.start();
    return config
  },
  function (error) {
    //失败
    return Promise.reject(error);
  }
);

//响应拦截
instance.interceptors.response.use(
  function (response) {
    //对响应数据进行操作 

    NProgress.done();
    return response.data;
  },
  function (error) {
    // 对响应错误进行操作
    NProgress.done();
    return Promise.reject(error);
  }
);

/**
 * 发起get请求
 * @param {*} url
 * @param {*} params
 * @returns
 */
const get = (url, params) => instance.get(url, params);

/**
 * 发起post请求
 * @param {*} url
 * @param {*} data
 * @returns
 */
const post = (url, data) => instance.post(url, data);
/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
const postImg = (url, data) => {
  instance.defaults.headers['Content-Type'] = 'multipart/form-data'
  return instance.post(url, data)
}

/**
 * 
 * @param {*} url 
 * @param {*} data 
 * @returns 
 */
const put = (url, data) => {
  instance.defaults.headers['Content-Type'] = 'application/json';
  return instance.put(url, data)
};


export {
  post,
  get,
  put,
  serverUrl
}