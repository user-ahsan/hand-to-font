"use client";

import { SignIn } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import DarkVeil from '../../../Background/DarkVeil/DarkVeil';
import { Loading } from '@/components/ui';

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for realistic feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
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
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">Loading Sign In...</h2>
          <Loading
            size="40"
            stroke="4"
            speed="0.9"
            color="white"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-300 text-lg">
              Sign in to continue creating amazing fonts
            </p>
          </div>

          {/* Clerk Sign In Component */}
          <div className="flex justify-center">
            <SignIn 
              routing="path"
              path="/auth/sign-in"
              afterSignInUrl="/dashboard"
              appearance={{
                baseTheme: undefined,
                variables: {
                  colorPrimary: "#ffffff",
                  colorText: "#ffffff",
                  colorTextSecondary: "#d1d5db",
                  colorBackground: "rgba(255, 255, 255, 0.1)",
                  colorInputBackground: "rgba(255, 255, 255, 0.05)",
                  colorInputText: "#ffffff",
                  borderRadius: "12px",
                },
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white",
                  headerTitle: "text-white font-bold",
                  headerSubtitle: "text-gray-300",
                  socialButtonsBlockButton: "bg-white/10 border-white/30 text-white hover:bg-white/20 font-medium",
                  socialButtonsBlockButtonText: "text-white font-medium",
                  dividerLine: "bg-white/30",
                  dividerText: "text-gray-300 font-medium",
                  formFieldLabel: "text-white font-medium",
                  formFieldInput: "bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/50",
                  formButtonPrimary: "bg-white text-black hover:bg-gray-200 font-semibold",
                  footerActionText: "text-gray-300",
                  footerActionLink: "text-blue-400 hover:text-blue-300 font-medium",
                  identityPreviewText: "text-white",
                  identityPreviewEditButton: "text-blue-400 hover:text-blue-300",
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}