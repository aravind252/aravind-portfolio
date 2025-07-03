
import { motion } from 'framer-motion';

const EducationTimeline = () => {
  const education = [
    {
      degree: "B.Tech - Computer Science (Data Science)",
      institution: "Vaagdevi College of Engineering",
      duration: "2021 - 2025",
      cgpa: "7.6",
      status: "completed"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Shivani Junior College", 
      duration: "2019 - 2021",
      cgpa: "8.5",
      status: "completed"
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Jyothi Nikethan High School",
      duration: "2018 - 2019", 
      cgpa: "8.8",
      status: "completed"
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400"></div>
      
      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start"
          >
            {/* Timeline dot */}
            <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-400/50"></div>
            
            {/* Content */}
            <div className="ml-20 bg-gray-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-cyan-400">{edu.degree}</h3>
                <span className="text-sm text-gray-400 mt-1 md:mt-0">{edu.duration}</span>
              </div>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <div className="flex items-center gap-4">
                <span className="text-gray-400">CGPA: <span className="text-white font-semibold">{edu.cgpa}</span></span>
                {edu.status === 'current' && (
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                    Current
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
