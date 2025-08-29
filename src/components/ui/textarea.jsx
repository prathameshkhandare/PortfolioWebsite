// src/components/ui/textarea.jsx
import React from "react";

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 border  border-gray-300 rounded text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

