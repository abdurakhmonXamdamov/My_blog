import axios from "axios";
const url = "https://myblogapi.hamkasb.uz";
const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${
      localStorage.getItem("token") || ""
    }`;
    return config;
  },
  (error) => {
    console.log("eeerrr", error);
    return Promise.reject(error);
  }
);

export { url, api };