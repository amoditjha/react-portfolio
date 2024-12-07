import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ExperienceModalProps {
  experience: {
    title: string;
    company: string;
    description: string;
    grades: string;
    projects: string;
    proejctDecscription: "";
    role: string;
    achievments?: string[];
    period: string;
    icon: string;
  } | null;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({
  experience,
  onClose,
}) => {
  console.log(experience);
  if (!experience) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
                  {experience.icon}
                </div> */}

          <div className="p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {experience.title}
            </h3>
            <h3 className=" text-2xl font-bold text-white mb-4">
              {experience.company}
            </h3>
            <div className="p-3">
              <h3 className="text-xl font-semibold  text-white mb-4">
                Duration:{" "}
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                  {experience.period}
                </span>
              </h3>
              {experience.projects.length > 0 ? (
                <h3 className="text-xl font-semibold text-white mb-4">
                  Project:{" "}
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                    {experience.projects}
                  </span>
                </h3>
              ) : (
                ""
              )}
              {experience.role ? (
                <h3 className="text-xl font-semibold   text-white mb-4">
                  Role:{" "}
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">
                    {experience.role}
                  </span>
                </h3>
              ) : (
                ""
              )}
              <p className="text-white/90 mb-6">{experience.description}</p>

              <p className="text-white/90 mb-6">
                {experience.proejctDecscription
                  ? experience.proejctDecscription
                  : ""}
              </p>
              {experience.achievments && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {experience.achievments.length > 0 ? "Achievements" : ""}
                  </h4>
                  <ul className="list-disc list-inside text-white/90 space-y-2">
                    {experience.achievments.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExperienceModal;
