import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MainLayout = ({ setCartCount, cartCount }) => {
  return (
    <div>
      <Header cartCount={cartCount} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
