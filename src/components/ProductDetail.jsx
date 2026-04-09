import React, { useState } from "react";
import products from "../data/product";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
const categoryColors = {
  Labtop: "from-black to-blue-700",
  Desktop: "from-black to-purple-700",
  Component: "from-black to-red-700",
  Display: "from-black to-yellow-400",
  Peripherals: "from-black to-green-400",
  Storage: "from-black to-orange-400",
};
const ProductDetail = () => {
  const { id } = useParams();
  const finddata = products.find((c) => c.id == id);
  console.log(finddata);
  const [count, setcount] = useState(1);
  const totalPrice = finddata.price * count;
  return (
    <>
      <div className=" md:w-200 md:h-130 lg:w-300 lg:h-140 m-auto mt-8 mb-8 border rounded-2xl backdrop-blur-md p-6">
        <div className="w-full h-full rounded-2xl flex flex-col md:flex-row gap-3 ">
          <div className="h-full md:w-80 lg:w-100  flex items-center flex-col ">
            <div className="">
              <span
                className={`text-xs border py-1 px-7 rounded-2xl font-bold uppercase tracking-wider bg-gradient-to-r ${
                  categoryColors[finddata.category] ||
                  "from-gray-500 to-gray-700"
                }`}
              >
                {finddata.category}
              </span>
            </div>
            <div className="w-80 h-80">
              <img src={finddata.image} alt="" className="w-80 h-full  " />
            </div>
            <div className="text-xl font-bold  ">{finddata.name} </div>
            <div>{finddata.specs}</div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(finddata.rating) ? "fill-amber-300 " : "fill-foreground"}`}
                  />
                ))}
              </div>
              <span className=" text-xs ">
                {finddata.rating} • {finddata.reviews} reviews
              </span>
            </div>
            <Link to="/">
              <button className="border px-10 py-2 mt-4 flex  gap-2 items-center rounded-xl cursor-pointer text-lg bg-red-700 hover:scale-105">
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </Link>
          </div>
          <div className="border h-1 w-full md:w-1 md:h-full bg-white"></div>
          <div className="h-full md:w-60 lg:w-50 flex items-center justify-center flex-col gap-6  ">
            <div className="flex gap-2 text-2xl">
              Price :
              <div className="text-red-500 font-extrabold">
                ${finddata.price.toLocaleString()}
              </div>
            </div>
            <div className="flex gap-2 md:flex-col lg:flex-row items-center">
              Quantity :
              <div className="flex border justify-between px-1 w-20 text-2xl rounded-lg">
                <button
                  onClick={() => setcount(count > 1 ? count - 1 : 1)}
                  className="cursor-pointer text-blue-700 font-bold"
                >
                  -
                </button>
                <div className="text-red-500">{count}</div>
                <button
                  onClick={() => setcount(count + 1)}
                  className="cursor-pointer text-blue-700 font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-2 text-2xl">
              Total:
              <div className="text-green-500 font-extrabold">
                ${totalPrice.toLocaleString()}
              </div>
            </div>
            <button className="border px-4 py-2 rounded-lg cursor-pointer bg-red-600 hover:scale-110 hover:text-lg transition-all duration-300">
              Buy Now
            </button>
            <button className="border px-7 py-2 rounded-lg cursor-pointer bg-green-600 hover:scale-110 hover:text-lg transition-all duration-300">
              +cart
            </button>
          </div>
          <div className="border w-full h-1 md:w-1 md:h-full bg-white"></div>
          <div className="h-full md:w-60 lg:w-150 flex items-center justify-center  ">
            <div className="flex flex-col gap-5 border w-100 md:w-60 lg:w-100 px-4 py-4 rounded-lg shadow-lg  shadow-blue-100">
              {finddata.detail.map((index) => (
                <p>• {index}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
