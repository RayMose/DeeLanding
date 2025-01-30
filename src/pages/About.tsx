import React from 'react';
import { motion } from 'framer-motion';
import { Award, Music, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Crafting unforgettable musical experiences since 2010'
    },
    {
      icon: Music,
      title: '500+ Events',
      description: 'Performed at major festivals and exclusive venues worldwide'
    },
    {
      icon: Users,
      title: '1M+ Listeners',
      description: 'Growing community of music lovers and supporters'
    }
  ];

  return (
    <div className="pt-16">
      <div className="relative h-[50vh] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About DJ PULSE
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">The Journey</h2>
            <p className="text-gray-600 mb-4">
              Starting from humble beginnings in local clubs, DJ PULSE has evolved into
              one of the most sought-after electronic music artists in the industry.
            </p>
            <p className="text-gray-600">
              With a unique blend of house, techno, and progressive elements,
              each set is crafted to take listeners on an unforgettable journey
              through sound and emotion.
            </p>
          </div>
          <div className="aspect-square">
            <img
              src="https://images.unsplash.com/photo-1563841930606-67e2bce48b78?auto=format&fit=crop&q=80"
              alt="DJ PULSE performing"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <achievement.icon className="mx-auto mb-4 text-purple-600" size={32} />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}