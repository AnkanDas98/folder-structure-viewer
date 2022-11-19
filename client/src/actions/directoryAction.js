import { directoryFetch } from "../reducers/directoryReducer";
import { axiosRequest } from "../request";

export const fetchDirectory = async (dispatch) => {
  try {
    const res = await axiosRequest.get("/directory");
    dispatch(directoryFetch(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const storeDirectory = async (dispatch, id, data) => {
  try {
    const res = await axiosRequest.post(`/store/directory/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(directoryFetch(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteDirectory = async (dispatch, id) => {
  try {
    const res = await axiosRequest.delete(`/delete/directory/${id}`);
    dispatch(directoryFetch(res.data));
  } catch (error) {
    console.log(error);
  }
};
