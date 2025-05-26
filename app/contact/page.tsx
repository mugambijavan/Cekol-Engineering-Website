import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";


export default function ContactPage() {
  return (
    <div>
      <HeroSection title="Get in Touch With Us" />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8">Contact Form</h2>
            <ContactForm />
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Visit Our Office</h3>
            <p className="text-gray-600">
              Summit House, 4th Floor, Moi Avenue<br/>
              P.O Box 28460-00200, Nairobi, Kenya
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}