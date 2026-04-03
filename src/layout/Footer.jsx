import React from 'react'
import logo from "../assets/logostore.png";


const Footer = () => {
   return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            
            <p className="text-foreground/60 text-sm">
              Premium computers and components for creators, gamers, and professionals.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-syne font-bold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">Desktops</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Laptops</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Components</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Displays</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Peripherals</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-syne font-bold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-syne font-bold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            © 2024 NexaCore. All rights reserved. Crafted with precision.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">Twitter</a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">Discord</a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">GitHub</a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
