import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import Home from "../components/Home";
import About from "../components/About";

const MainRoutes = () => {
    return (
        <>
            {/* Navbar and all the routes */}
            <Navbar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products/" element={<Products />} />
                <Route path="products/men" element={<Products />} />
                <Route path="products/women" element={<Products />} />
                <Route path="products/kids" element={<Products />} />
                <Route path="products/homedecor" element={<Products />} />
            </Routes>
        </>
    );
};
export { MainRoutes };
