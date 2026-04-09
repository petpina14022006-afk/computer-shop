import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logostore.png";
import { FaBars, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import LoginRegister from "../form/LoginRegister";

const Header = ({ cartCount = 0 }) => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav className="sticky top-0 left-0 right-0  z-50  backdrop-blur-md border-b ">
      {/* Logo and Name of store */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-4 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="w-15 h-8 flex items-center justify-center ">
            <img src={logo} alt="" className="w-full rounded" />
          </div>
          <span className=" font-bold text-3xl hidden sm:block">
            Computer Store
          </span>
        </div>

        {/* Route page for computer*/}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li className="text-md hover:scale-120 hover:text-blue-500">
              <Link to="/">Home</Link>
            </li>
            <li className="text-md hover:scale-120 hover:text-blue-500">
              <Link to="/product">Products</Link>
            </li>
            <li className="text-md hover:scale-120 hover:text-blue-500">
              <Link to="/support">Support</Link>
            </li>
            <li className="text-md hover:scale-120 hover:text-blue-500">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-18 right-0 h-full w-45  md:hidden transition-transform duration-300 z-50 ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className=" ">
            <ul className="flex flex-col gap-4shadow/90 p-3 bg-gray-700 ">
              <li className="text-md hover:scale-120 hover:text-blue-500">
                <Link to="/">Home</Link>
              </li>
              <li className="text-md hover:scale-120 hover:text-blue-500 text-2xl font-medium">
                <Link to="/product">Products</Link>
              </li>
              <li className="text-md hover:scale-120 hover:text-blue-500 text-2xl font-medium">
                <Link to="/support">Support</Link>
              </li>
              <li className="text-md hover:scale-120 hover:text-blue-500 text-2xl font-medium">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsLogin(true);
              setShowModal(true);
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Login
          </button>

          <button
            onClick={() => {
              setIsLogin(false);
              setShowModal(true);
            }}
            className="px-3 py-1 bg-green-500 text-white rounded"
          >
            Register
          </button>
          {showModal && (
            <LoginRegister isLogin={isLogin} setShowModal={setShowModal} />
          )}
          <button className="p-2 hover:shadow/40 shadow-blue-800 hover:bg-green-400 rounded-lg transition-colors relative">
            <MdOutlineShoppingCart className="w-5 h-5" />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          </button>
          <button
            className="md:hidden p-2 hover:shadow/40 shadow-blue-800 hover:bg-green-400 rounded-lg transition-colors"
            onClick={() => setToggle(!toggle)}
          >
            <FaBars className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
