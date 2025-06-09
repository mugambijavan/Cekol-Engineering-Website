// app/projects/page.js
'use client';
import { PROJECTS } from '../_utils/constants';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectsCard';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50">
      <HeroSection 
        title="Our Engineering Legacy"
        subtitle="Transforming landscapes across East Africa"
        variant="projects"
      />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects Portfolio
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our landmark projects that showcase our expertise in delivering complex infrastructure solutions on time and within budget
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                value={project.value}
                location={project.location}
                description={project.description}
                year={project.year}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Our Project Excellence</h3>
            <p className="text-xl max-w-3xl mx-auto mb-12">
              CEKOL Engineering consistently delivers projects that exceed client expectations through innovative solutions and strict quality control
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { value: "100%", label: "Project Completion Rate" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "KES 500M+", label: "Total Project Value" },
                { value: "24+", label: "Projects Completed" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}