
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const SkillsGrid = () => {
  const skills = {
    "Languages & Tech": ["Java", "Python", "C", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS"],
    "Tools": ["VS Code", "Eclipse IDE", "Power BI", "MS Excel", "PowerPoint"],
    "Soft Skills": ["Creativity", "Problem Solving", "Adaptability", "Communication"]
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, skillList], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          className="bg-gray-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="border-cyan-500/30 text-gray-200 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsGrid;
