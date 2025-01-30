import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import type { Event } from '../types';

// Mock data (replace with API call)
const event: Event = {
  id: '1',
  name: 'Neon Nights Festival',
  date: 'March 15, 2024',
  location: 'Miami Beach',
  description: 'Join us for an unforgettable night of electronic music under the stars. Featuring world-class DJs and incredible visual productions, this is an event you won\'t want to miss.',
  ticketUrl: 'https://tickets.example.com',
  type: 'Festival',
  image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80'
};

export default function EventDetails() {
  const { id } = useParams();

  return (
    <div className="pt-16">
      <div className="relative h-[50vh]">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            {event.name}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="text-purple-600" size={24} />
              <div>
                <h3 className="font-semibold">Date</h3>
                <p>{event.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-purple-600" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>{event.location}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
            <p className="text-gray-600">{event.description}</p>
          </div>

          <div className="flex justify-center">
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              <Ticket className="mr-2" size={20} />
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}