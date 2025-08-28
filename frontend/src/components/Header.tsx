"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Header() {
  const [isInHero, setIsInHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsInHero(scrollPosition < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto">
        <div className={`
          backdrop-blur-xl bg-white/10 border border-white/20 
          transition-all duration-700 ease-out
          rounded-full py-4
          ${isInHero 
            ? 'px-12 max-w-7xl' 
            : 'px-12 max-w-6xl'
          }
          mx-auto
          flex items-center justify-between
        `}>
          {/* Left Side - Brand */}
          <div className="flex items-center">
            <Link 
              href="#hero" 
              className="text-white font-semibold text-xl hover:text-blue-200 transition-colors duration-200 cursor-pointer"
            >
              Hand to Font
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/docs" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Docs
            </Link>
            <Link 
              href="#pricing" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
          </nav>

          {/* Right Side - Sign In Button */}
          <div className="flex items-center">
            <Link 
              href="/signin" 
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-200 transition-all duration-300 font-medium"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
