import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import HeroSection from '@/components/HeroSection';
import ParticleBackground from '@/components/ParticleBackground';
import SkillsGrid from '@/components/SkillsGrid';
import ProjectCard from '@/components/ProjectCard';
import EducationTimeline from '@/components/EducationTimeline';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Bank Management System",
      description: "Desktop banking application with account, transaction, and loan management. Built with Java Swing UI for seamless user experience.",
      tech: ["Java", "JDBC", "MySQL", "Swing"],
      github: "https://github.com/aravind252"
    },
    {
      title: "Employee Management System",
      description: "Real-time CRUD-based system for comprehensive employee data management including attendance and salary tracking.",
      tech: ["Java", "JDBC", "MySQL"],
      github: "https://github.com/aravind252"
    },
    {
      title: "Movie Recommendation System",
      description: "Intelligent recommendation engine using content-based filtering with cosine similarity and TF-IDF algorithms.",
      tech: ["Python", "Machine Learning", "TF-IDF"],
      github: "https://github.com/aravind252"
    }
  ];

  const certifications = [
    "Power BI - Infosys Springboard",
    "Java Full Stack Internship - Cognifyz",
    "360Digrii Full Stack Course",
    "Python Internship (1-month)"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Avatar className="w-48 h-48 border-4 border-cyan-400/50 shadow-lg shadow-cyan-400/25">
                  <AvatarImage 
                    src="/lovable-uploads/baa9f755-b1fc-4220-9868-0136254f9d6c.png" 
                    alt="Valaboju Aravind"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gray-800 text-cyan-400 text-3xl font-bold">
                    VA
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                I'm a passionate developer with experience in Java, Spring Boot, and MySQL. 
                I love solving real-world problems through clean, scalable code. 
                I'm always learning, always building.
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-400">
                <span className="text-lg">📍</span>
                <span className="text-lg">Warangal, Telangana</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
          </motion.div>
          <SkillsGrid />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume & Certifications */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resume & Certifications
            </h2>
            <a 
              href="https://drive.google.com/file/d/1UtsYuCWmhno9-MtuAiQxYr4HKIztOcbF/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 mb-12"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-200">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>
          <EducationTimeline />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Thoughts & Tech
            </h2>
            <Card className="bg-gray-800/50 border-cyan-500/20 max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-300">Blog coming soon! Stay tuned for insights on development, tech trends, and coding adventures.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Me
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Let's Connect</h3>
              
              <div className="space-y-4">
                <a href="mailto:aravindvalaboju11@gmail.com" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <span className="text-gray-200">aravindvalaboju11@gmail.com</span>
                </a>
                
                <a href="tel:+917794985963" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <span className="text-gray-200">+91-7794985963</span>
                </a>
                
                <a href="https://linkedin.com/in/aravindvalaboju11" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <Linkedin className="h-6 w-6 text-cyan-400" />
                  <span className="text-gray-200">linkedin.com/in/aravindvalaboju11</span>
                </a>
                
                <a href="https://github.com/aravind252" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <Github className="h-6 w-6 text-cyan-400" />
                  <span className="text-gray-200">github.com/aravind252</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 relative z-10 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Home</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Projects</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>
            
            <div className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              "Let's build the future with code."
            </div>
            
            <div className="text-gray-500">
              © 2025 Valaboju Aravind. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
