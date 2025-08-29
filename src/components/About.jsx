import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-1"
          >
            <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/444bb6750_picppic.png"
                alt="Prathmesh Khandare"
                className="w-full h-auto object-cover rounded-xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                FullStack Developer & Problem Solver
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                Currently pursuing BE in Information Technology at MMCOE, Pune with a strong focus on 
                <span className="text-purple-400 font-semibold"> Fullstack development</span> and 
                <span className="text-blue-400 font-semibold"> cloud computing</span>. 
                Passionate about building scalable solutions with modern technologies.
              </p>
              
              <div className="flex items-center space-x-3 text-gray-400 mb-6">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Pune, India</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-900/30 to-transparent p-4 rounded-lg border border-purple-500/20 backdrop-blur-sm"
              >
                <GraduationCap className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="text-white font-semibold text-sm">Education</h4>
                <p className="text-gray-400 text-xs">BE Information Technology    • CGPA: 9.79</p>
                <p className="text-gray-400 text-xs">Diploma Computer Engineering • 88.34%</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-900/30 to-transparent p-4 rounded-lg border border-blue-500/20 backdrop-blur-sm"
              >
                <Award className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="text-white font-semibold text-sm">Experience</h4>
                <p className="text-gray-400 text-xs">Backend Intern at IISPPR</p>
                <p className="text-gray-400 text-xs">Freelance Full Stack Developer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}