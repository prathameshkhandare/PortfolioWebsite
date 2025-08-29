import React from "react";
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-950 to-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Prathmesh
            </h3>
            <p className="text-gray-400 mt-2">Fullstack Developer & Tech Enthusiast</p>
          </div>

          {/* Quote */}
          <div className="max-w-md mx-auto">
            <p className="text-gray-300 italic text-lg">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-gray-500 text-sm mt-2">- Cory House</p>
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>

          {/* Copyright */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center space-x-2 text-gray-400"
          >
            <span>© {currentYear} Prathmesh. Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and</span>
            <Code className="w-4 h-4 text-purple-400" />
            <span>in Pune, India</span>
          </motion.div>

          {/* Tech stack credit */}
          {/* <div className="text-xs text-gray-500">
            Built with React, Tailwind CSS & Framer Motion
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}