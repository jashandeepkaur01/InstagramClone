import axios from "axios";
import { baseURL } from "./Constants";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
     (config) => {
     const obj= JSON.parse(localStorage.getItem('persist:root'))
     console.log("token",obj)
     const obj1 = JSON.parse(obj.auth);
    
     const token = obj1.token;
        if (token) {
          config.headers.authorization = 'token '+token;
        }
        return config;
    },
  function (error) {
    
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );