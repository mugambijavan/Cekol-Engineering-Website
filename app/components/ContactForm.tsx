'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm({ isQuote = false }) {
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: isQuote ? 'Quote Request' : '',
    message: isQuote ? 'I would like to request a quote for my project.' : '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  useEffect(() => {
    if (isQuote) {
      setFormData(prev => ({
        ...prev,
        subject: 'Quote Request',
        message: 'I would like to request a quote for my project.'
      }));
    }
  }, [isQuote]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your request...");
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setResult("Request submitted successfully! We'll contact you soon.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: isQuote ? 'Quote Request' : '',
          message: isQuote ? 'I would like to request a quote for my project.' : '',
          projectType: '',
          budget: '',
          timeline: ''
        });
      } else {
        setResult(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg text-center ${
            result.includes("successfully") 
              ? "bg-emerald-100 text-emerald-800" 
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {result}
        </motion.div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            placeholder="+254 700 000 000"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            placeholder="How can we help you?"
          />
        </div>

        {isQuote && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Type *
              </label>
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
              >
                <option value="">Select project type</option>
                <option value="Building Construction">Building Construction</option>
                <option value="Road Construction">Road Construction</option>
                <option value="Water & Drainage">Water & Drainage</option>
                <option value="Grading Works">Grading Works</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Budget *
                </label>
                <select
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="">Select budget range</option>
                  <option value="Under KES 5M">Under KES 5M</option>
                  <option value="KES 5M - 20M">KES 5M - 20M</option>
                  <option value="KES 20M - 50M">KES 20M - 50M</option>
                  <option value="KES 50M - 100M">KES 50M - 100M</option>
                  <option value="Over KES 100M">Over KES 100M</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Timeline *
                </label>
                <select
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                >
                  <option value="">Select timeline</option>
                  <option value="Immediate Start">Immediate Start</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6-12 Months">6-12 Months</option>
                  <option value="Over 1 Year">Over 1 Year</option>
                </select>
              </div>
            </div>
          </>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <div className="mt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 disabled:bg-blue-800/80"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              isQuote ? "Request Quote" : "Send Message"
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
}