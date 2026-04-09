import React from "react";
import { useState } from "react";
import { Star, Check, Component } from "lucide-react";
const ProductCart = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  const categoryColors = {
    Labtop: "from-black to-blue-700",
    Desktop: "from-black to-purple-700",
    Component: "from-black to-red-700",
    Display: "from-black to-yellow-400",
    Peripherals: "from-black to-green-400",
    Storage: "from-black to-orange-400",
  };

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative border-2 rounded-2xl p-6  transition-all duration-500 h-full flex flex-col overflow-hidden  shadow-lg shadow-blue-100 bg-gray-700">
        {/* Top Section with Badge */}
        <div className="space-y-4 flex-1">
          <div className="flex items-start justify-between">
            {/* Category Badge */}
            <span
              className={`text-xs border py-1 px-7 rounded-2xl font-bold uppercase tracking-wider bg-gradient-to-r ${
                categoryColors[product.category] || "from-gray-500 to-gray-700"
              }`}
            >
              {product.category}
            </span>
          </div>

          {/* Product Image Placeholder */}
          <div
            className={`w-full rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}
          >
            <div className="text-center h-60 ">
              <img src={product.image} alt="" className="h-full" />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className=" font-bold text-md  group-hover:text-amber-400 transition-colors">
              {product.name}
            </h3>
            <p className=" text-sm leading-relaxed">{product.specs}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-300 " : "fill-foreground"}`}
                />
              ))}
            </div>
            <span className=" text-xs ">
              {product.rating} • {product.reviews} reviews
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 mt-4 flex items-center justify-between">
          <div>
            <p className=" text-xs uppercase  font-bold tracking-wider">
              Price
            </p>
            <p className=" font-bold text-2xl text-accent">
              ${product.price.toLocaleString()}
            </p>
          </div>

          {/* <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg  font-bold text-sm uppercase transition-all duration-300 flex items-center gap-2 ${
              addedToCart
                ? "bg-green-500/20 text-green-400 border border-green-500/50"
                : "bg-gradient-to-r from-blue-500 to-red-500 hover:scale-105"
            }`}
          >
            {addedToCart ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              "+ Cart"
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
