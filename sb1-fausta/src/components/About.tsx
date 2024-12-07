// import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Palette,
  Layout,
  Smartphone,
  Database,
  Terminal,
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <Code2 className="w-6 h-6" />, level: 80 },
      { name: 'JavaScript', icon: <Code2 className="w-6 h-6" />, level: 85 },
      { name: 'Tailwind', icon: <Palette className="w-6 h-6" />, level: 60 },
      { name: 'Next.js', icon: <Layout className="w-6 h-6" />, level: 40 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <Terminal className="w-6 h-6" />, level: 60 },
      { name: 'Express', icon: <Terminal className="w-6 h-6" />, level: 60 },
      { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 60 },
      { name: 'REST APIs', icon: <Code2 className="w-6 h-6" />, level: 70 },
    ],
  },
  // {
  //   category: 'Mobile',
  //   items: [
  //     {
  //       name: 'React Native',
  //       icon: <Smartphone className="w-6 h-6" />,
  //       level: 75,
  //     },
  //     { name: 'Flutter', icon: <Smartphone className="w-6 h-6" />, level: 65 },
  //   ],
  // },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-transparent" >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start space-y-6"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="/amodit-profile-pic2.png"
                  alt="Amodit Jha"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-white/90 leading-relaxed text-center lg:text-left">
                I'm a passionate Frontend Developer with a keen eye for creating
                beautiful and functional web experiences. With a strong
                foundation in modern web technologies and a drive for continuous
                learning, I transform ideas into elegant, user-friendly
                applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-2">2+</h3>
                <p className="text-white/80">Years Experience</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-2">5+</h3>
                <p className="text-white/80">Projects Completed</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-2">5+</h3>
                <p className="text-white/80">Certifications</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-2">5+</h3>
                <p className="text-white/80">Technologies Mastered</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5 }}
                      className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-white">{skill.icon}</div>
                        <h4 className="text-lg font-semibold text-white">
                          {skill.name}
                        </h4>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          className="bg-white rounded-full h-2"
                          initial={{ width: 0 }}
                          animate={
                            inView ? { width: `${skill.level}%` } : { width: 0 }
                          }
                          transition={{ duration: 1, delay: index * 0.1 }}
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
  );
};

export default About;
