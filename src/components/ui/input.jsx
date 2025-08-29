// src/components/ui/input.jsx
import React from "react";

export function Input(props) {
  return (
    <input
      {...props}
      className= "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
