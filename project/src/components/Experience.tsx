
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';
import ExperienceModal from './ExperienceModal';
const experiences = [
  {
    title: 'System Engineer',
    company: 'Company: TCS',
    period: '2022-2024',
    deccription:'',
    grades:'A',
    projects:'Walmart',
    role:'React developer',
    proejctDecscription:'Developed and Implemented multiple features for an e- commerce website using NextJS framework, optimizing performance and elevating user experience.',
    achievments:['Special Initiative Award','Best Performer Award'],

    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'Associate System Engineer',
    company: 'Company: TCS',
    period: '2021-2022',
    deccription:'',
    grades:'A',
    projects:'walmart',
    proejctDecscription:'Developed and Implemented multiple features for an e- commerce website using HTML, CSS, JavaScript, jQuery and Bootstrap. ',
    role:'Javascript developer',
    achievments:['Special Initiative Award','Best Performer Award'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: 'MCA',
    company: 'College: GGCT',
    period: '2019-2021',
    deccription:'',
    grades:'8.5 CGPA',
    projects:'',
    role:'',
    proejctDecscription:'',
    achievments:[],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: 'BCA',
    company: 'College: St. Aloysius College',
    period: '2016-2019',
    deccription:'',
    grades:'7.9 CGPA',
    projects:'',
    role:'',
    proejctDecscription:'',
    achievments:[],
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedExperience, setSelectedExperience] = useState(null);
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
         
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  inView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
             
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} text-${
                    index % 2 === 0 ? 'left' : 'right'
                  }`}
                >
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm cursor-pointer"
                  onClick={() => {setSelectedExperience(exp); console.log(exp)}}>
                    <h3 className="text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-white/80">{exp.company}</p>
                    <p className="text-white/60 text-sm">{exp.period}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
                  {exp.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
};

export default Experience;
