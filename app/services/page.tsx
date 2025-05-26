
import { SERVICES } from '../_utils/constants';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {
  return (
    <div>
      <HeroSection title="Our Comprehensive Services" />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}