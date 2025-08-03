'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play, Zap, Bot, Heart, Cloud, Smartphone } from 'lucide-react'

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Black Aviator Game',
      description: 'Real-money betting game with admin controls, Firebase wallet integration, Razorpay payment gateway, and complete UI/UX design.',
      icon: <Play className="text-neon-cyan" />,
      tags: ['React', 'Firebase', 'Razorpay', 'Real-time'],
      gradient: 'from-neon-cyan to-blue-500'
    },
    {
      title: 'Telegram Music Bot',
      description: 'Advanced music bot with queue management, voice channel playback, Spotify integration, and YouTube support.',
      icon: <Bot className="text-neon-purple" />,
      tags: ['Telegraf', 'Node.js', 'Spotify API', 'YouTube API'],
      gradient: 'from-neon-purple to-purple-500'
    },
    {
      title: 'AI Tools Suite',
      description: 'Multiple AI-based applications using OpenAI, featuring tools for video generation, image processing, and text analysis.',
      icon: <Zap className="text-neon-pink" />,
      tags: ['OpenAI', 'Python', 'AI/ML', 'Next.js'],
      gradient: 'from-neon-pink to-pink-500'
    },
    {
      title: 'Discord Bot Collection',
      description: '15+ Discord bots including moderation bots, music bots, webhook tools, and custom server management solutions.',
      icon: <Bot className="text-neon-green" />,
      tags: ['Discord.js', 'MongoDB', 'Node.js', 'Webhooks'],
      gradient: 'from-neon-green to-green-500'
    },
    {
      title: 'Universal Cloud',
      description: 'Premium hosting business offering domain registration, VPS hosting, shared hosting, and cloud solutions.',
      icon: <Cloud className="text-neon-cyan" />,
      tags: ['Business', 'Hosting', 'VPS', 'Domains'],
      gradient: 'from-neon-cyan to-teal-500'
    },
    {
      title: 'Raghuvanshi Healthcare',
      description: 'Elegant healthcare landing page with online booking system, bilingual video advertisements, and modern UI.',
      icon: <Heart className="text-neon-purple" />,
      tags: ['Healthcare', 'Booking System', 'UI/UX', 'Business'],
      gradient: 'from-neon-purple to-indigo-500'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-glow p-6 rounded-xl group cursor-pointer"
              >
                {/* Project Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github size={20} />
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
