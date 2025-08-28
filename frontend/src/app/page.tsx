"use client";

import { TextAnimate } from "../components/magicui/text-animate";
import DarkVeil from "../Background/DarkVeil/DarkVeil";
import { HugeiconsIcon } from "@hugeicons/react";
import { 
  PenTool01Icon, 
  CustomizeIcon, 
  FileExportIcon, 
  CloudIcon 
} from "@hugeicons/core-free-icons";
import { Marquee } from "../components/magicui/marquee";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Fixed background with DarkVeil */}
      <div className="fixed inset-0 w-full h-full">
        <DarkVeil 
          speed={0.5}
          hueShift={0}
          noiseIntensity={0}
          scanlineFrequency={0}
          scanlineIntensity={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      
      {/* First Section: Hero */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Your Handwriting into Fonts in Seconds
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Upload your handwriting sample, and our AI converts it into a professional font you can use anywhere.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg">
              Try Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-200">
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* Second Section: Features */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-7xl mx-auto">
          {/* Section Title with Text Animate */}
          <div className="mb-20">
            <TextAnimate 
              animation="blurInUp" 
              by="word" 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              as="h2"
            >
              Powerful Features for Font Creation
            </TextAnimate>
            <TextAnimate 
              animation="fadeIn" 
              by="word" 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              delay={0.5}
            >
              Everything you need to transform your handwriting into professional fonts
            </TextAnimate>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Glassmorphism Card 1 */}
            <div className="group relative p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-white/20 hover:scale-105">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 text-white">
                <HugeiconsIcon icon={PenTool01Icon} size={64} color="currentColor" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Handwriting to Font AI</h3>
              <p className="text-gray-300 text-base leading-relaxed">Advanced AI technology that accurately converts your handwriting into digital fonts</p>
              </div>
            </div>

            {/* Glassmorphism Card 2 */}
            <div className="group relative p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-white/20 hover:scale-105">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 text-white">
                <HugeiconsIcon icon={CustomizeIcon} size={64} color="currentColor" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Customize Styles & Weights</h3>
              <p className="text-gray-300 text-base leading-relaxed">Adjust font thickness, spacing, and style variations to match your needs</p>
              </div>
            </div>

            {/* Glassmorphism Card 3 */}
            <div className="group relative p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-white/20 hover:scale-105">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 text-white">
                <HugeiconsIcon icon={FileExportIcon} size={64} color="currentColor" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Export to TTF/OTF/Web</h3>
              <p className="text-gray-300 text-base leading-relaxed">Download your fonts in multiple formats for use in any design software</p>
              </div>
            </div>

            {/* Glassmorphism Card 4 */}
            <div className="group relative p-8 text-center rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/40 hover:shadow-white/20 hover:scale-105">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 text-white">
                <HugeiconsIcon icon={CloudIcon} size={64} color="currentColor" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Use Across Platforms</h3>
              <p className="text-gray-300 text-base leading-relaxed">Access your fonts from anywhere and use them on all your devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Fifteenth Section: How It Works - Glassmorphism Cards */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="mb-20">
            <TextAnimate 
              animation="blurInUp" 
              by="word" 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              as="h2"
            >
              How It Works
            </TextAnimate>
            <TextAnimate 
              animation="fadeIn" 
              by="word" 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              delay={0.5}
            >
              Transform your handwriting into beautiful fonts with AI
            </TextAnimate>
          </div>

          {/* Process Steps - Glassmorphism Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-80 w-full">
              {/* Step 1: Upload */}
              <div className="group cursor-pointer h-full">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:scale-105 h-full flex flex-col">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step Icon */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full flex items-center justify-center border border-blue-400/30 backdrop-blur-sm transform-gpu flex-shrink-0">
                    <svg className="w-10 h-10 text-white transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                      Upload Handwriting
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Upload your handwriting sample in any format
                    </p>
                  </div>
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            <div className="h-80 w-full">
              {/* Step 2: AI Processing */}
              <div className="group cursor-pointer h-full">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:scale-105 h-full flex flex-col">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step Icon */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-400/30 backdrop-blur-sm transform-gpu flex-shrink-0">
                    <svg className="w-10 h-10 text-white transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-green-200 transition-colors duration-300">
                      AI Cleans & Vectorizes
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Our AI processes and optimizes your handwriting
                    </p>
                  </div>
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-green-400/20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            <div className="h-80 w-full">
              {/* Step 3: Download */}
              <div className="group cursor-pointer h-full">
                <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-3xl hover:scale-105 h-full flex flex-col">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step Icon */}
                  <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center border border-purple-400/30 backdrop-blur-sm transform-gpu flex-shrink-0">
                    <svg className="w-10 h-10 text-white transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                      Preview & Download
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      Preview your font and download in multiple formats
                    </p>
                  </div>
                  
                  {/* Subtle Border Glow */}
                  <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-400/20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-20 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Trial */}
            <div className="group cursor-pointer perspective-1000 flex flex-col">
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/20 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-blue-500/20 h-full transform-gpu group-hover:rotate-y-12 group-hover:scale-105 flex flex-col">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Free Trial</h3>
                  <div className="text-4xl font-bold text-white mb-2">$0</div>
                  <p className="text-gray-400">Perfect for trying out the service</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    1 Font Creation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic Export Formats
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Community Support
                  </li>
                  <li className="flex items-center text-gray-300 opacity-0">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Spacer Item
                  </li>
                </ul>
                
                <button className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all duration-300 mt-auto">
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Pro */}
            <div className="group cursor-pointer perspective-1000 flex flex-col">
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/20 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-blue-500/20 h-full transform-gpu group-hover:rotate-y-12 group-hover:scale-105 flex flex-col">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-white mb-2">$29</div>
                  <p className="text-gray-400">For professionals and designers</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited Fonts
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All Export Formats
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced Customization
                  </li>
                </ul>
                
                <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 mt-auto">
                  Get Pro
                </button>
              </div>
            </div>

            {/* Enterprise */}
            <div className="group cursor-pointer perspective-1000 flex flex-col">
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/20 shadow-2xl transition-all duration-700 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-blue-500/20 h-full transform-gpu group-hover:rotate-y-12 group-hover:scale-105 flex flex-col">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-2">$99</div>
                  <p className="text-gray-400">For teams and organizations</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team Collaboration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    API Access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated Support
                  </li>
                </ul>
                
                <button className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all duration-300 mt-auto">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

              {/* Testimonials Section */}
        <section className="relative z-10 py-20 min-h-screen">
          {/* Section Header */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Loved by Designers Worldwide</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Join thousands of designers who have transformed their workflow with Hand to Font</p>
          </div>

          {/* Testimonial Cards with Marquee */}
          <div className="mb-20">
            <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
              {/* Testimonial Card 1 */}
              <div className="w-80 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sarah Chen</h4>
                    <p className="text-gray-400 text-sm">UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;Hand to Font has completely revolutionized my workflow. I can now create custom fonts from my sketches in minutes instead of hours. The accuracy is incredible!&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="w-80 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Marcus Rodriguez</h4>
                    <p className="text-gray-400 text-sm">Brand Designer</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;As a brand designer, I need unique typography that stands out. Hand to Font lets me create custom fonts that perfectly match my brand vision. Game changer!&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="w-80 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Alex Thompson</h4>
                    <p className="text-gray-400 text-sm">Product Designer</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;The AI-powered handwriting recognition is mind-blowing. I can sketch ideas on paper and turn them into professional fonts instantly. This tool is pure magic!&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Card 4 */}
              <div className="w-80 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    L
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Lisa Park</h4>
                    <p className="text-gray-400 text-sm">Typography Specialist</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;I&apos;ve been in typography for 15 years, and this is the most innovative tool I&apos;ve seen. The quality of the generated fonts rivals hand-crafted ones. Incredible!&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Card 5 */}
              <div className="w-80 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    D
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">David Kim</h4>
                    <p className="text-gray-400 text-sm">Creative Director</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;Our agency uses Hand to Font for all custom typography needs. It saves us countless hours and delivers exceptional results. Highly recommended!&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial Card 6 */}
              <div className="w-80 h-64 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    E
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Emma Wilson</h4>
                    <p className="text-gray-400 text-sm">Digital Artist</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;I love how intuitive this tool is. Even as someone who&apos;s not tech-savvy, I can create beautiful custom fonts. The results are always stunning!&rdquo;
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </Marquee>
          </div>


        </section>

        {/* Footer Section */}
        <footer className="relative z-10 py-16 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Hand to Font</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transform your handwriting into beautiful, professional fonts with our advanced AI technology.
                </p>
                                 <div className="flex space-x-4">
                   <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
                     Get Started
                   </button>
                   <button className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200">
                     Contact Us
                   </button>
                 </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Hand to Font. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

    </div>
  );
}
