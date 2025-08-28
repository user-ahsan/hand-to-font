"use client";

import React, { useState, useEffect } from "react";
import { Splash, Loading } from "@/components/ui";

interface SplashScreenProps {
  children: React.ReactNode;
  splashDuration?: number;
  loadingDuration?: number;
  onSplashComplete?: () => void;
}

export function SplashScreen({
  children,
  splashDuration = 2000,
  loadingDuration = 1000,
  onSplashComplete,
}: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show splash for specified duration
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setShowLoading(true);
    }, splashDuration);

    // Show loading for specified duration
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setIsComplete(true);
      onSplashComplete?.();
    }, splashDuration + loadingDuration);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(loadingTimer);
    };
  }, [splashDuration, loadingDuration, onSplashComplete]);

  if (isComplete) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Animated background (similar to DarkVeil but simplified) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      {/* Splash content */}
      <div className="relative z-10 text-center">
        {showSplash && (
          <div className="space-y-8 animate-in fade-in duration-1000">
            {/* App logo/title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hand to Font
              </h1>
              <p className="text-lg text-gray-300 font-medium">
                Transform Your Handwriting into Professional Fonts
              </p>
            </div>
            
            {/* Bouncy loader with specified variant */}
            <Splash
              size="50"
              speed="1.75"
              color="white"
              variant="circle"
              className="mt-8"
            />
          </div>
        )}

        {showLoading && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Loading...
              </h2>
              <p className="text-gray-400">
                Preparing your experience
              </p>
            </div>
            
            {/* Tailspin loader */}
            <Loading
              size="40"
              stroke="4"
              speed="0.9"
              color="white"
              className="mt-6"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SplashScreen;