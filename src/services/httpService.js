import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  const ex = error.response;

  if (ex && ex.status === 400) {
    console.log("400 error: ", ex.data);
  } else if (ex && ex.status === 401) {
    console.log("401 error: ", ex.data);
    window.location.href = "/";
  } else if (ex && ex.status === 402) {
    console.log("402 error");
  } else if (ex && ex.status === 403) {
    console.log("403 error");
    toast.error(ex.data.detail);
  } else if (ex && ex.status === 404) {
    console.log("404 error");
  } else if (ex && ex.status === 406) {
    console.log("406 error");
    toast.error(ex.data.detail);
  } else if (ex && ex.status === 409) {
    console.log("409 error");
  } else if (!expectedError) {
    console.log("server error: ", error);
    toast.error("Server is not respond please try later");
  }
  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
export default http;
