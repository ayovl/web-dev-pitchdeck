import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Check, Loader2 } from 'lucide-react';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    requirements: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!formRef.current) return;
    
    gsap.fromTo(
      formRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        website: '',
        requirements: ''
      });
      
      // Reset submission status after delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 relative">
      <div className="ambient-light ambient-light-secondary" style={{ opacity: 0.2, top: '20%', right: '10%' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Project</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div 
          ref={formRef}
          className="max-w-2xl mx-auto bg-base-200 bg-opacity-60 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-800"
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-success-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-success-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300">
                We've received your project requirements and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-base-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  placeholder="John Smith"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-base-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Website URL (Optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-base-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-base-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white resize-none"
                  placeholder="Describe your project goals, requirements, and timeline..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary btn-lg font-medium text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Project Requirements'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;