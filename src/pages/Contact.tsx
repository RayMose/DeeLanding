import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Miami Beach, FL 33139'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@djpulse.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM'
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&q=80)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Get In Touch
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <info.icon className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}