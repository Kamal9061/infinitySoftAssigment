import axios from "axios";
import { GET_ALL_MOVIE, MOVIE_LOADING, ERR_MOVIE } from "./actionType";
import { APIURL } from "../../Utils/api-url";

export const getAllMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LOADING });
    const res = await axios.get(APIURL.getMovies);
    dispatch({ type: GET_ALL_MOVIE, payload: res.data.Search });
  } catch (err) {
    const error = {
      status: err.response?.status,
      statusText: err.response?.statusText,
      message: err.response?.data?.message?.detail,
    };
    dispatch({ type: ERR_MOVIE, payload: error });
  }
};
