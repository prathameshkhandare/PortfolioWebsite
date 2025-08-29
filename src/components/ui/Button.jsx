// File: src/components/ui/Button.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "default", // "default" | "outline"
  size = "md",          // "sm" | "md" | "lg"
  icon: Icon,
  className = "",
  ...props
}) {
  // size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg"
  };

  // variant classes
  const variantClasses = {
    default: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/30",
    outline: "border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black shadow-md hover:shadow-purple-300"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
}
