import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
      { name: "Java", icon: "☕", level: 95, color: "from-red-400 to-pink-500" },
    { name: "JavaScript", icon: "🟨", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "Node.js", icon: "🟢", level: 90, color: "from-green-400 to-emerald-500" },
    { name: "React.js", icon: "⚛️", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Express.js", icon: "🚀", level: 87, color: "from-purple-400 to-indigo-500" },
    { name: "MongoDB", icon: "🍃", level: 85, color: "from-green-500 to-teal-500" },
    { name: "MySQL", icon: "🐬", level: 90, color: "from-blue-400 to-indigo-500" },
    { name: "AWS", icon: "☁️", level: 70, color: "from-orange-300 to-yellow-400" },
    { name: "Git/GitHub", icon: "📚", level: 85, color: "from-gray-400 to-gray-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Skill icon and name */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.level}% proficient</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      {/* Shine effect */}
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Also experienced with:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML","Tailwind CSS", "Bootstrap", "C++", "SQL", "Postman", "VS Code", "Razorpay", "JWT", "OAuth 2.0", "Cloudinary"].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm hover:text-white transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}