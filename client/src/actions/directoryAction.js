import {
  directoryFetch,
  child_directory_fetch,
} from "../reducers/directoryReducer";
import { axiosRequest } from "../request";

export const fetchDirectory = async (dispatch) => {
  try {
    const res = await axiosRequest.get("/directory");
    dispatch(directoryFetch(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchChildDirectory = async (dispatch, id) => {
  try {
    const res = await axiosRequest.get(`/directory/${id}`);
    dispatch(child_directory_fetch(res.data));
  } catch (error) {
    console.log(error);
  }
};
