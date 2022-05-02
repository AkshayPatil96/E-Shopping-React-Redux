import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
} from "./actionTypes";

const initState = {
    data: [],
    isLoading: false,
    isError: false,
    filterData: [],
    products: [],
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_REQUEST: {
            return {
                data: payload,
                isLoading: true,
            };
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                products: payload,
            };
        }
        case GET_PRODUCTS_FAILURE: {
            return {
                filterData: payload,
                isError: true,
            };
        }

        default:
            return state;
    }
};
export default reducer;
