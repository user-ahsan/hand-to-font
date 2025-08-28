"use client";

import React from 'react';
import { Loading } from '@/components/ui';
import DarkVeil from '@/Background/DarkVeil/DarkVeil';

interface LoadingWrapperProps {
  isLoading: boolean;
  loadingTitle?: string;
  loadingSubtitle?: string;
  currentStep?: string;
  progress?: number;
  showProgress?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function LoadingWrapper({
  isLoading,
  loadingTitle = 'Loading...',
  loadingSubtitle,
  currentStep,
  progress = 0,
  showProgress = false,
  children,
  className = ''
}: LoadingWrapperProps) {
  if (!isLoading) {
    return <>{children}</>;
  }

  return (
    <div className={`relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center ${className}`}>
      {/* Background */}
      <div className="fixed inset-0 w-full h-full">
        <DarkVeil 
          speed={0.3}
          hueShift={0}
          noiseIntensity={0}
          scanlineFrequency={0}
          scanlineIntensity={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      
      {/* Loading Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Loading Title */}
        <h2 className="text-2xl font-semibold text-white mb-2 animate-pulse">
          {loadingTitle}
        </h2>
        
        {/* Loading Subtitle */}
        {loadingSubtitle && (
          <p className="text-gray-400 mb-6 animate-fade-in">
            {loadingSubtitle}
          </p>
        )}
        
        {/* Current Step */}
        {currentStep && (
          <p className="text-gray-300 mb-4 text-sm animate-fade-in">
            {currentStep}
          </p>
        )}
        
        {/* Progress Bar */}
        {showProgress && progress > 0 && (
          <div className="w-full bg-gray-700/50 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        )}
        
        {/* Loading Spinner */}
        <Loading
          size="40"
          stroke="4"
          speed="0.9"
          color="white"
          className="animate-fade-in"
        />
        
        {/* Loading dots animation */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingWrapper;