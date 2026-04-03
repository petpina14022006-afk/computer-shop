import React from "react";
import { ArrowRight, Star } from "lucide-react";
import owner from "../assets/owner.png";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"></div>
      </div>

      <div className="banner max-w-7xl mx-auto grid lg:grid-cols-2 gap-30 items-center p-10 rounded-3xl">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="font-bold text-sm uppercase tracking-wider">
              NEXT GENERATION HARDWARE
            </span>
            <h1 className=" font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-balance">
              Power Your{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className=" text-lg leading-relaxed max-w-xl font-bold">
              Premium computers, components, and accessories crafted with
              cutting-edge technology for creators, gamers, and professionals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className=" p-4 rounded-lg border  flex flex-col items-center  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  hover:scale-90 transition-all duration-500">
              <p className=" font-bold text-2xl text-accent">10K+</p>
              <p className=" text-xs uppercase tracking-wider">Products</p>
            </div>
            <div className=" p-4 rounded-lg border  flex flex-col items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:scale-90 transition-all duration-500">
              <p className=" font-bold text-2xl text-primary">4.9★</p>
              <p className=" text-xs uppercase tracking-wider">Rating</p>
            </div>
            <div className=" p-4 rounded-lg border   flex flex-col items-center bg-gradient-to-r from-yellow-400 via-orange-400-500 to-pink-600 hover:scale-90 transition-all duration-500">
              <p className=" font-bold text-2xl ">24/7</p>
              <p className=" text-xs uppercase tracking-wider">Support</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-pink-500 font-bold rounded-lg hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
            <button className="px-8 py-3 border  hover:border-blue-500  hover:backdrop-blur-xl hover:text-lg font-bold rounded-lg  transition-all duration-300 flex items-center gap-2">
              Explore More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right - Floating Product Card */}
        <div className="relative h-full min-h-96 ">
          <div className="flex items-center justify-center">
            {/* Floating Card */}
            <div className="w-full max-w-sm">
              <div className="  border rounded-2xl p-6 backdrop-blur-sm  transition-all duration-500 hover:scale-105 ">
                <div className="h-80 w-full flex justify-center">
                  <img src={owner} alt="" className="h-full w-69 rounded-3xl" />
                </div>

                <div className="space-y-3">
                  <h3 className=" font-bold text-lg ">Store Owner</h3>
                  <p className=" text-sm">Tel: +855 10944454</p>

                  <div className="border-t pt-3 flex items-center justify-between">
                    <span className=" font-bold text-2xl text-accent">
                      PET PINA
                    </span>
                    <div className="flex gap-3">
                      <button className=" rounded-lg text-2xl font-bold transition-all ">
                        <a href="http://www.facebook.com/petpina168">
                          <FaFacebook className=" text-blue-600 hover:scale-120 " />
                        </a>
                      </button>
                      <button className=" rounded-lg text-2xl font-bold transition-all ">
                        <a href="http://t.me/ITalone168">
                          <FaTelegram className=" text-blue-400 hover:scale-120" />
                        </a>
                      </button>
                      <button className=" rounded-lg text-2xl font-bold transition-all ">
                        <FaInstagram className="bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] rounded hover:scale-120" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
