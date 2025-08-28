"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function Header() {
  const [isInHero, setIsInHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedOutsideMenu = menuRef.current ? !menuRef.current.contains(target) : true;
      const clickedOutsideButton = buttonRef.current ? !buttonRef.current.contains(target) : true;
      if (clickedOutsideMenu && clickedOutsideButton) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-700 ease-out">
      <div className="max-w-7xl mx-auto">
        <div className={`
          backdrop-blur-xl bg-white/10 border border-white/20 
          transition-all duration-700 ease-out
          rounded-full py-4
          ${isInHero 
            ? 'px-4 md:px-12 max-w-7xl' 
            : 'px-4 md:px-12 max-w-6xl'
          }
          mx-auto
          flex items-center justify-between
          relative
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
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:flex items-center">
            <Link 
              href="/signin" 
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-blue-200 transition-all duration-300 font-medium"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            ref={buttonRef}
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon: hamburger / close */}
            {isMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Dropdown Panel */}
          {isMenuOpen && (
            <div id="mobile-menu" className="absolute top-full left-0 right-0 mt-2 md:hidden px-4">
              <div ref={menuRef} className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 space-y-2">
                <Link href="/docs" className="block text-white font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                  Docs
                </Link>
                <Link href="#pricing" className="block text-white font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </Link>
                <Link href="/contact" className="block text-white font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/about" className="block text-white font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <div className="pt-2">
                  <Link href="/signin" className="block w-full text-center px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 border border-transparent transition-all duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
