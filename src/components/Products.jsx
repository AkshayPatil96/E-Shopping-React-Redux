import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData } from "../Redux/actions";
import { Grid, Select } from "./Styled";

export const Products = () => {
    const dispatch = useDispatch();
    let products = useSelector((state) => state)
    
    useEffect(() => {
        // dispatch(getProductsData());
        getProductsData();

        // fetch ProductsData using redux-thunk on every mount
    }, []);

    console.log('products: ', products);

    const handleSort = (e) => {
        // dispatch sort products on change
    };
    return (
        <>
            <h2>Products</h2>
            <Select data-testid="product-sort-order" onChange={handleSort}>
                <option>Sort by--</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </Select>
            <Grid data-testid="products-container">
                {/* iterate data and show each POroduct card */}
            </Grid>
        </>
    );
};
