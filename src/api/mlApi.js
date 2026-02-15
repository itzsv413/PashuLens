import axios from "axios";

const ML_API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default ML_API;
