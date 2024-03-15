
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: '',
  headers: {
    "Accept": "application/json",
    "Content-type": "application/json",
  },
});


export default api;