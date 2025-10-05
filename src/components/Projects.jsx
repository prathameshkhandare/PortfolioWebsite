import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import  Button  from "@/components/ui/Button";

export default function Projects() {
  const projects = [
    {
      title: "Connect Counsellor",
      description: "A comprehensive counseling platform with secure authentication, payment integration using Razorpay, and content management dashboard. Built RESTful APIs for user access control and content management.",
      techStack: ["MERN Stack", "Razorpay", "OAuth 2.0", "JWT"],
      image: "https://westcoastuniversity.edu/wp-content/uploads/2023/06/WCU-Blog-Guide-to-Counseling-Degree-and-Career.jpg",
      githubLink: "",
      liveLink: "www.connectcounsellor.com",
      featured: true
    },
    {
      title: "InternHub",
      description: "Comprehensive intern management system with attendance tracking, performance reports, and feedback handling. Features secure APIs for department-wise intern tracking and data management.",
      techStack: ["MERN Stack", "Cloudinary", "JWT", "OAuth 2.0"],
      image: "https://careeremployer.com/wp-content/uploads/2021/11/Project-Management-intern.jpg",
      githubLink: "https://github.com/prathameshkhandare/iisppr-backend/tree/Production-Deployment",
      featured: true
    },
    {
      title: "Skillora",
      description: "AI-driven personalized  learning platform with test-based performance tracking, personalized content curation, and educator publishing system. Implemented hierarchical filtering using YouTube Data API.",
      techStack: ["MERN Stack", "Generative AI", "JWT", "YouTube API"],
      image: "https://miro.medium.com/v2/resize:fit:768/1*PNCNFxT0gMYR0u5uO1u1fQ.png",
      githubLink: "https://github.com/prathameshkhandare/DEVCLASH_Backend",
      featured: true,
      hackathon: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world projects showcasing full-stack development and problem-solving skills
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Project Image - Smaller */}
                  <div className="md:col-span-2 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                       className="w-full h-48 md:h-full object-cover rounded-l-xl transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {project.featured && (
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                      {project.hackathon && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold block">
                          Hackathon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Content - Larger */}
                  <div className="md:col-span-3 p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      {project.liveLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-white transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Recent Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4">
              <h4 className="text-yellow-400 font-semibold">🏆 Winner</h4>
              <p className="text-gray-300 text-sm">Devclash Hackathon 2025</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/30 rounded-lg p-4">
              <h4 className="text-gray-400 font-semibold">🥈 Runner Up</h4>
              <p className="text-gray-300 text-sm">Silicon Fusion 2024</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold">🏆 Winner</h4>
              <p className="text-gray-300 text-sm">Regional Paper Presentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
