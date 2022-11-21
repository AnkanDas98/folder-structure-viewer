import axios from "axios";

// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = "https://simplefolderstructure.herokuapp.com/api";

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
