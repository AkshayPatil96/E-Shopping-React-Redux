// getProductsData;
// sortProducts;
// filterProducts;

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const getDataRequest = (isLoading) => {
    return {
        type: GET_PRODUCTS_REQUEST,
        isLoading: true,
    };
};

export const getDataSuccess = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data,
    };
};
export const getDataFailure = (isError) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        isError: true,
    };
};
