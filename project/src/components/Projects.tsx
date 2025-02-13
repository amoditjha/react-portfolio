import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform built with React and Node.js',
    longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist',
      'Secure payment processing',
      'Order tracking and history',
    ],
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'JWT'
    ],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    longDescription: 'A real-time task management application that enables teams to collaborate effectively with features like task assignment, progress tracking, and instant notifications.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Firebase', 'Tailwind'],
    features: [
      'Real-time collaboration',
      'Task assignment and tracking',
      'Project timeline visualization',
      'Team chat and comments',
      'File attachments',
    ],
    technologies: [
      'React', 'Firebase', 'Tailwind CSS', 'React DnD', 'Chart.js'
    ],
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather information with interactive maps',
    longDescription: 'An interactive weather dashboard that provides detailed weather information, forecasts, and historical data visualization with interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'OpenWeather API', 'Charts.js'],
    features: [
      'Real-time weather updates',
      'Interactive weather maps',
      '7-day forecast',
      'Historical weather data',
      'Location-based weather alerts',
    ],
    technologies: [
      'React', 'OpenWeather API', 'Chart.js', 'Mapbox GL', 'D3.js'
    ],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm cursor-pointer transform transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedProject(project)}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-white/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-white/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;