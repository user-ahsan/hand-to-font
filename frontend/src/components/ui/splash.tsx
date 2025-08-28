"use client";

import React, { useEffect } from "react";
import { bouncy } from "ldrs";

// TypeScript declarations for LDRS
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-bouncy': {
        size?: string;
        speed?: string;
        color?: string;
      };
    }
  }
}

// Register the bouncy loader
if (typeof window !== "undefined") {
  bouncy.register();
}

interface SplashProps {
  size?: string;
  speed?: string;
  color?: string;
  className?: string;
  variant?: "circle" | "square";
  start?: "center" | "edge";
}

export function Splash({
  size = "45",
  speed = "1.75",
  color = "white",
  className = "",
  variant = "circle",
  start = "center",
}: SplashProps) {
  useEffect(() => {
    // Ensure the component is registered on client side
    if (typeof window !== "undefined") {
      bouncy.register();
    }
  }, []);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <l-bouncy
        size={size}
        speed={speed}
        color={color}
      ></l-bouncy>
    </div>
  );
}

export default Splash;