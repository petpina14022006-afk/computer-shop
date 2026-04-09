import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Product from "../page/Product";
import ProductDetail from "../components/ProductDetail";
import Support from "../page/Support";
import About from "../page/About";
import Home from "../page/Home";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={"Not found"} />
      </Routes>
    </>
  );
};

export default MainRouter;
