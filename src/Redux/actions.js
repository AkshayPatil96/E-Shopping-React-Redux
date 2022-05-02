// use axios for api call
import axios from "axios";
import { getDataRequest, getDataSuccess, getDataFailure } from "./actionTypes";

const getProductsData =
    (isLoading = false) => async (dispatch) => {
        dispatch(getDataRequest);
        if (!isLoading) {
            dispatch(getDataFailure());
        }
        return axios
            .get("https://movie-fake-server.herokuapp.com/products")
            .then((res) => {
                return dispatch(getDataSuccess(res.data));
            })
            .catch((err) => dispatch(getDataFailure(err)));
    };

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
