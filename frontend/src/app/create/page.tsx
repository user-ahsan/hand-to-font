"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import DarkVeil from '../../Background/DarkVeil/DarkVeil';
import Header from '../../components/Header';
import { useUserProfile } from '../../hooks/useUserProfile';
import { Loading } from '@/components/ui';
import Link from 'next/link';

export default function CreateFont() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <CreateFontContent />
      </SignedIn>
    </>
  );
}

function CreateFontContent() {
  const { displayName, firstName } = useUserProfile();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for realistic feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full min-h-screen bg-black overflow-x-hidden flex items-center justify-center">
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
          <h2 className="text-2xl font-semibold text-white mb-6">Preparing Font Creator...</h2>
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
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <Header />
      
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

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Create Your Font, {firstName}! ✍️
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your handwriting into a professional font in minutes. Follow our simple process to get started.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">Font Creation Coming Soon! 🚀</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                We&apos;re putting the finishing touches on our AI-powered font creation workflow. 
                Soon you&apos;ll be able to upload your handwriting and create beautiful fonts instantly.
              </p>
              
              {/* Features Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Upload Handwriting</h3>
                  <p className="text-gray-400 text-sm">Simply upload a sample of your handwriting</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">AI Processing</h3>
                  <p className="text-gray-400 text-sm">Our AI analyzes and vectorizes your writing</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⬇️</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Download Font</h3>
                  <p className="text-gray-400 text-sm">Get your custom font in TTF/OTF format</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/dashboard"
                  className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  ← Back to Dashboard
                </Link>
                <button 
                  disabled
                  className="bg-white/5 border border-white/20 text-gray-400 px-8 py-3 rounded-full font-semibold cursor-not-allowed"
                >
                  Create Font (Coming Soon)
                </button>
              </div>
            </div>
          </div>

          {/* Development Notice */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-blue-400 font-semibold text-lg mb-3">
                🛠️ For Developers
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                This page will be replaced with the actual font creation workflow. Features to implement:
              </p>
              <ul className="text-gray-400 text-sm mt-3 ml-6 list-disc space-y-1">
                <li>Handwriting sample upload with drag & drop</li>
                <li>Character collection workflow (A-Z, 0-9, symbols)</li>
                <li>AI processing and vectorization</li>
                <li>Font preview and testing</li>
                <li>Export functionality (TTF/OTF/Web fonts)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}