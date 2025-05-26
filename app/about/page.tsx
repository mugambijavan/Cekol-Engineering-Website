import HeroSection from "../components/HeroSection";

export default function AboutPage() {
  return (
    <div>
      <HeroSection title="About Cekol Engineering" />
      
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Our History</h2>
        <p className="text-gray-600 mb-8">
          Founded in 2011 and incorporated in 2019, Cekol Engineering has grown 
          to become a leading force in civil engineering across Africa...
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide quality construction and technical services while 
              maintaining long-term relationships based on quality assurance...
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the contractor of choice through dedication, experience, 
              and highly motivated employees...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}