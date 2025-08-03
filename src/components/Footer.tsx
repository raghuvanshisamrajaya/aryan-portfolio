'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/aryan_devloper', label: 'Instagram' },
    { icon: <MessageCircle size={20} />, href: 'https://t.me/aryan_devloper', label: 'Telegram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Aryan.dev</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer & AI Engineer crafting innovative digital solutions 
              and building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-neon-cyan rounded-lg transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Businesses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">My Businesses</h4>
            <div className="space-y-3">
              <div>
                <a href="#" className="text-neon-cyan hover:text-neon-cyan/80 font-medium transition-colors duration-300">
                  🧠 Universal Cloud
                </a>
                <p className="text-gray-400 text-sm">Premium hosting solutions</p>
              </div>
              <div>
                <a href="#" className="text-neon-purple hover:text-neon-purple/80 font-medium transition-colors duration-300">
                  🏥 Raghuvanshi Healthcare
                </a>
                <p className="text-gray-400 text-sm">Digital healthcare services</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 Aryan Thakur. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="text-neon-pink" size={16} />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
