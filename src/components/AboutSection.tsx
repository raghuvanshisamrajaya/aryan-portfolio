'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Briefcase, Heart, Target } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: <Briefcase className="text-neon-cyan" />, number: '10+', label: 'Websites Built' },
    { icon: <Target className="text-neon-purple" />, number: '5', label: 'AI Tools Created' },
    { icon: <User className="text-neon-pink" />, number: '15+', label: 'Discord Bots' },
    { icon: <Heart className="text-neon-green" />, number: '2', label: 'Businesses' },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate <span className="text-neon-cyan font-semibold">full-stack developer</span> and 
                  <span className="text-neon-purple font-semibold"> entrepreneur</span>. At just 18, I&apos;ve built 
                  an impressive portfolio of digital solutions that make a real impact.
                </p>
                
                <p>
                  My journey includes developing <span className="text-neon-pink font-semibold">5–10 large-scale websites</span>, 
                  creating <span className="text-neon-green font-semibold">5 innovative AI tools</span>, and building 
                  <span className="text-neon-cyan font-semibold">15 Discord/Telegram bots</span> that serve thousands of users.
                </p>
                
                <p>
                  I also develop advanced Discord servers and run two successful businesses:
                </p>
                
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2"></div>
                    <div>
                      <span className="text-neon-cyan font-semibold">🧠 Universal Cloud</span> – A premium hosting company 
                      offering domains, VPS, and shared hosting solutions
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-2"></div>
                    <div>
                      <span className="text-neon-purple font-semibold">🏥 Raghuvanshi Healthcare</span> – A healthcare startup 
                      offering digital services and modern healthcare solutions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="card-glow p-6 text-center rounded-xl"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-slate-800">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
