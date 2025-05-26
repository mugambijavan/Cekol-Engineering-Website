
import { PROJECTS } from '../_utils/constants';
import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectsCard';

export default function ProjectsPage() {
  return (
    <div>
      <HeroSection title="Our Completed Projects" />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                value={project.value}
                location={project.location}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}