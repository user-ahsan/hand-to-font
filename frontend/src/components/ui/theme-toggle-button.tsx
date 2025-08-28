"use client";

import React from "react";
import { useTheme } from "@/components/ui/theme-provider";
import { Moon, Sun, Monitor } from "lucide-react";

interface ThemeToggleButtonProps {
  variant?: "circle" | "square";
  start?: "center" | "edge";
  className?: string;
}

export function ThemeToggleButton({
  variant = "circle",
  start = "center",
  className = "",
}: ThemeToggleButtonProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "dark":
        return <Moon className="h-4 w-4" />;
      case "light":
        return <Sun className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const getShapeClasses = () => {
    const baseClasses = "p-2 transition-all duration-300";
    
    if (variant === "circle") {
      return `${baseClasses} rounded-full`;
    }
    return `${baseClasses} rounded-lg`;
  };

  const getPositionClasses = () => {
    if (start === "center") {
      return "flex items-center justify-center";
    }
    return "flex items-start justify-start";
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${getShapeClasses()}
        ${getPositionClasses()}
        button-glass
        hover:button-glass-hover
        text-white-force
        border
        border-white-20
        hover:border-white-30
        ${className}
      `}
      title={`Current theme: ${theme}. Click to toggle.`}
      type="button"
    >
      {getIcon()}
    </button>
  );
}

export default ThemeToggleButton;