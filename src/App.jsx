import React, { useState } from "react";

import MainRouter from "./routes/MainRouter.jsx";
import Header from "./layout/Header.jsx";




const App = () => {
    const [cartCount, setCartCount] = useState(0);
  return (
    <div className="app bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      {/* <MainRouter  /> */}
       <MainRouter
      cartCount={cartCount}
      setCartCount={setCartCount}
    />
    
    </div>
  );
};

export default App;
