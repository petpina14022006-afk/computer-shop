import React from 'react'
import logo from "../assets/logostore.png";


const Footer = () => {
   return (
    <footer className="border-t">
      <div className=" banner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border mt-2 rounded-2xl text-2xl ">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-10">
           
              <div className="flex items-center gap-5">
                        <div className="w-15 h-8 flex items-center justify-center ">
                            <img src={logo} alt="" className="w-full rounded" />
                        </div>
                        <span className=" font-bold text-xl hidden sm:block">
                          Computer Store
                        </span>
                      </div>
            
            <p className=" text-lg">
              Premium computers and components for creators, gamers, and professionals.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4 ">
            <h4 className=" font-bold ">Products</h4>
            <ul className="space-y-2 text-lg ">
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Desktops</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Laptops</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Components</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Displays</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Peripherals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className=" font-bold ">Support</h4>
            <ul className="space-y-2 text-lg ">
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Help Center</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Shipping Info</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Returns</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Warranty</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className=" font-bold ">Company</h4>
            <ul className="space-y-2 text-lg ">
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">About Us</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Careers</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Blog</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Privacy</a></li>
              <li><a href="#" className="hover:scale-110 hover:text-blue-600 transition-all duration-300">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
