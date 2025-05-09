import axios from "axios";

const Axios = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": "reqres-free-v1",
  },
});

// Add a request interceptor
Axios.interceptors.response.use(
  function (response) {
    // Do something before request is sent
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default Axios;
