import React from 'react';
import Hero from '../components/Hero';
import MixPlayer from '../components/MixPlayer';
import EventCard from '../components/EventCard';
import { Mix, Event } from '../types';

// Mock data (replace with API calls)
const mixes: Mix[] = [
  {
    id: '1',
    title: 'Summer Vibes 2024',
    coverImage: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80',
    duration: '1:20:00',
    genre: 'House',
    year: 2024,
    url: 'https://example.com/mix1.mp3',
    downloadUrl: 'https://example.com/mix1-download.mp3',
    popularity: 95
  },
  // Add more mixes...
];

const events: Event[] = [
  {
    id: '1',
    name: 'Neon Nights Festival',
    date: 'March 15, 2024',
    location: 'Miami Beach',
    description: 'Join us for an unforgettable night of electronic music under the stars.',
    ticketUrl: 'https://tickets.example.com',
    type: 'Festival',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80'
  },
  // Add more events...
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section id="mixes" className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Mixes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mixes.map(mix => (
            <MixPlayer key={mix.id} mix={mix} />
          ))}
        </div>
      </section>
      
      <section id="events" className="py-20 px-4 md:px-8 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
}