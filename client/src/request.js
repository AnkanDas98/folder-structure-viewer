import axios from "axios";

// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = "/api";

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
