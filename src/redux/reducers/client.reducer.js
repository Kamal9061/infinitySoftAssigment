import {
    GET_ALL_MOVIE,
    MOVIE_LOADING,
    ERR_MOVIE,
    RESET_MOVIE
} from "../actions/actionType";

const initialState = {
    movies: [],
    loading: true,
    errors: false,
};

export default function billersReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case MOVIE_LOADING:
            return {
                ...state,
                loading: true,
                errors: false,
            };
        case GET_ALL_MOVIE:
            return {
                ...state,
                movies: payload,
                loading: false,
                errors: false,
            };
        case ERR_MOVIE:
            return {
                ...state,
                errors: payload,
                loading: false,
            };
        case RESET_MOVIE:
            return {
                ...state,
                movies: [],
                loading: false,
                errors: false,
            };
        default:
            return state;
    }
}
