
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="bg-gray-800/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-xl text-cyan-400 mb-3">{project.title}</CardTitle>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="border-cyan-500/30 text-gray-200 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
