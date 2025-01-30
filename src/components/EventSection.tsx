import React from 'react';
import EventCard from './EventCard';
import { motion } from 'framer-motion';
import { Container, Typography, Grid } from '@mui/material';
import type { Event } from '../types';

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
  {
    id: '2',
    name: 'Underground Warehouse Party',
    date: 'April 5, 2024',
    location: 'Brooklyn, NY',
    description: 'Experience the raw energy of underground electronic music in an authentic warehouse setting.',
    ticketUrl: 'https://tickets.example.com',
    type: 'Club Night',
    image: 'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Sunset Beach Sessions',
    date: 'May 20, 2024',
    location: 'Ibiza, Spain',
    description: 'Dance to deep house beats as the sun sets over the Mediterranean.',
    ticketUrl: 'https://tickets.example.com',
    type: 'Beach Party',
    image: 'https://images.unsplash.com/photo-1544961371-516024f8e267?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Techno Revolution',
    date: 'June 10, 2024',
    location: 'Berlin, Germany',
    description: 'A night of cutting-edge techno music in the heart of Berlin.',
    ticketUrl: 'https://tickets.example.com',
    type: 'Club Night',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    name: 'Summer Love Festival',
    date: 'July 15, 2024',
    location: 'Los Angeles, CA',
    description: 'The biggest summer electronic music festival on the West Coast.',
    ticketUrl: 'https://tickets.example.com',
    type: 'Festival',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    name: 'Rooftop Groove',
    date: 'August 8, 2024',
    location: 'Chicago, IL',
    description: 'Groove to house music with a stunning skyline view.',
    ticketUrl: 'https://tickets.example.com',
    type: 'Rooftop Party',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80'
  }
];

export default function EventSection() {
  return (
    <section id="events">
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: { xs: 4, md: 8 } }}
          >
            Upcoming Events
          </Typography>
          
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {events.map((event, index) => (
              <Grid item xs={1} sm={4} md={4} key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EventCard event={event} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}