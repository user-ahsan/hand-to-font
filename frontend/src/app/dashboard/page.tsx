"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useEffect } from 'react';
import DarkVeil from '../../Background/DarkVeil/DarkVeil';
import Header from '../../components/Header';
import AuthTest from '../../components/AuthTest';
import ProfileSetupInstructions from '../../components/ProfileSetupInstructions';
import { useUserProfile } from '../../hooks/useUserProfile';
import { useLoading, LOADING_STEPS } from '../../hooks/useLoading';
import LoadingWrapper from '../../components/LoadingWrapper';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <DashboardContent />
      </SignedIn>
    </>
  );
}

function DashboardContent() {
  const { displayName, firstName, hasCompleteProfile, email } = useUserProfile();
  const { isLoading, currentStep, progress, complete } = useLoading({
    initialDelay: 200,
    minimumDuration: 1000,
    enableTransitions: true,
    loadingSteps: LOADING_STEPS.dashboard
  });

  // Complete loading after user profile is ready
  useEffect(() => {
    if (displayName) {
      const timer = setTimeout(() => {
        complete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [displayName, complete]);

  return (
    <LoadingWrapper
      isLoading={isLoading}
      loadingTitle="Loading Dashboard"
      loadingSubtitle={`Welcome back, ${firstName || 'User'}!`}
      currentStep={currentStep}
      progress={progress}
      showProgress={true}
    >
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
            {/* Auth Test Component */}
            <AuthTest />
            
            {/* Profile Setup Instructions */}
            <ProfileSetupInstructions />
          
          {/* Welcome Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome back, {displayName}! 👋
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to create amazing fonts from your handwriting? Let&apos;s get started!
            </p>
            
            {/* Profile Completion Notice */}
            {!hasCompleteProfile && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 max-w-2xl mx-auto mb-8">
                <p className="text-yellow-400 font-medium">
                  ⚠️ Complete your profile to get the best experience!
                </p>
                <p className="text-yellow-300/80 text-sm mt-2">
                  Add your name and username in your account settings.
                </p>
              </div>
            )}
            
            {/* Primary CTA */}
            <Link 
              href="/create"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg"
            >
              Create New Font
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-gray-300">Fonts Created</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0</div>
              <div className="text-gray-300">Downloads</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Pro</div>
              <div className="text-gray-300">Plan Status</div>
            </div>
          </div>

          {/* Recent Fonts Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Your Fonts</h2>
              <Link 
                href="/create"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Create New →
              </Link>
            </div>

            {/* Empty State */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">No fonts yet</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Create your first custom font from your handwriting. It only takes a few minutes!
              </p>
              <Link 
                href="/create"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Create Your First Font
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Create Font */}
              <Link 
                href="/create"
                className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Create Font</h3>
                <p className="text-gray-300 text-sm">Turn your handwriting into a professional font</p>
              </Link>

              {/* Upload Sample */}
              <div className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Upload Sample</h3>
                <p className="text-gray-300 text-sm">Start with an existing handwriting sample</p>
              </div>

              {/* Browse Templates */}
              <div className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Templates</h3>
                <p className="text-gray-300 text-sm">Explore pre-made font templates and styles</p>
              </div>

              {/* Settings */}
              <Link 
                href="/settings"
                className="group bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Settings</h3>
                <p className="text-gray-300 text-sm">Customize your account and preferences</p>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  );
}