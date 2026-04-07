import React from "react";
import { useState } from "react";
import { Star, Check, Component } from "lucide-react";

const CustomPcCart = ({ component }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  const categoryColors = {
    CPU: "from-black to-blue-700",
    GPU: "from-black to-purple-700",
    Motherboard: "from-black to-red-700",
    Display: "from-black to-yellow-400",
    Peripherals: "from-black to-green-400",
    Storage: "from-black to-orange-400",
  };

  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="relative border-2 rounded-2xl p-6  transition-all duration-500 h-full flex flex-col overflow-hidden  shadow-lg shadow-blue-100 bg-gray-700">
        {/* Top Section with Badge */}
        <div className="space-y-4 flex justify-between">
          <div className="flex items-start justify-between">
            {/* Category Badge */}
            <span
              className={`text-xs border py-1 px-7 rounded-2xl font-bold uppercase tracking-wider bg-gradient-to-r ${
                categoryColors[component.category] ||
                "from-gray-500 to-gray-700"
              }`}
            >
              {component.category}
            </span>
          </div>
          <div>
                <button
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
          </button>
          </div>
          
        </div>
        <div className="border-t pt-4 w-full flex justify-between mt-5 ">
                <div className="font-bold text-lg  group-hover:text-amber-400 transition-colors">{component.name}</div>
                <div className="">${component.price.toLocaleString()}</div>
        </div>
        <div>
            {component.brand}
        </div>
        

        {/* Bottom Section */}
        <div className="border-t pt-4 mt-4 flex items-center justify-between">
        
          
        </div>
      </div>
    </div>
  );
};

export default CustomPcCart;
