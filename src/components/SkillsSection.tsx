'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'neon-cyan',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
      ]
    },
    {
      title: 'Backend',
      color: 'neon-purple',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Firebase', level: 90 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Bots & APIs',
      color: 'neon-pink',
      skills: [
        { name: 'Discord.js', level: 95 },
        { name: 'Telegraf', level: 90 },
        { name: 'Spotify API', level: 80 },
        { name: 'YouTube API', level: 85 },
      ]
    },
    {
      title: 'Tools & Services',
      color: 'neon-green',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Linux', level: 75 },
        { name: 'Figma', level: 70 },
        { name: 'ChatGPT', level: 85 },
      ]
    },
    {
      title: 'Payment & Hosting',
      color: 'neon-cyan',
      skills: [
        { name: 'Razorpay API', level: 85 },
        { name: 'Vercel', level: 90 },
        { name: 'Firebase Hosting', level: 85 },
        { name: 'DigitalOcean', level: 75 },
      ]
    }
  ]

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colorMap = {
      'neon-cyan': {
        bg: 'bg-neon-cyan',
        text: 'text-neon-cyan',
        border: 'border-neon-cyan'
      },
      'neon-purple': {
        bg: 'bg-neon-purple',
        text: 'text-neon-purple',
        border: 'border-neon-purple'
      },
      'neon-pink': {
        bg: 'bg-neon-pink',
        text: 'text-neon-pink',
        border: 'border-neon-pink'
      },
      'neon-green': {
        bg: 'bg-neon-green',
        text: 'text-neon-green',
        border: 'border-neon-green'
      }
    }
    return colorMap[color as keyof typeof colorMap]?.[type] || 'bg-neon-cyan'
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="card-glow p-6 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${getColorClass(category.color, 'bg')}`}></div>
                  <h3 className={`text-xl font-semibold ${getColorClass(category.color, 'text')}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5 }}
                          className={`h-2 rounded-full ${getColorClass(category.color, 'bg')}`}
                          style={{
                            boxShadow: `0 0 10px ${category.color === 'neon-cyan' ? '#00ffff' : 
                                                   category.color === 'neon-purple' ? '#bf00ff' :
                                                   category.color === 'neon-pink' ? '#ff0080' : '#00ff80'}40`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
