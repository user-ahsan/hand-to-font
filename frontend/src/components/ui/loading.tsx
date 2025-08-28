"use client";

import React, { useEffect } from "react";
import { tailspin } from "ldrs";

// TypeScript declarations for LDRS
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'l-tailspin': {
        size?: string;
        stroke?: string;
        speed?: string;
        color?: string;
      };
    }
  }
}

// Register the tailspin loader
if (typeof window !== "undefined") {
  tailspin.register();
}

interface LoadingProps {
  size?: string;
  stroke?: string;
  speed?: string;
  color?: string;
  className?: string;
}

export function Loading({
  size = "40",
  stroke = "4",
  speed = "0.9",
  color = "white",
  className = "",
}: LoadingProps) {
  useEffect(() => {
    // Ensure the component is registered on client side
    if (typeof window !== "undefined") {
      tailspin.register();
    }
  }, []);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <l-tailspin
        size={size}
        stroke={stroke}
        speed={speed}
        color={color}
      ></l-tailspin>
    </div>
  );
}

export default Loading;