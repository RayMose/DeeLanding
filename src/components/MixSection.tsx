import React from 'react';
import MixPlayer from './MixPlayer';
import { motion } from 'framer-motion';
import { Container, Typography, Grid } from '@mui/material';
import type { Mix } from '../types';

const mixes: Mix[] = [
  {
    id: '1',
    title: 'Summer Vibes 2024',
    coverImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80',
    duration: '1:20:00',
    genre: 'House',
    year: 2024,
    url: 'https://example.com/mix1.mp3',
    downloadUrl: 'https://example.com/mix1-download.mp3',
    popularity: 95
  },
  {
    id: '2',
    title: 'Deep House Journey',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    duration: '1:45:00',
    genre: 'Deep House',
    year: 2024,
    url: 'https://example.com/mix2.mp3',
    downloadUrl: 'https://example.com/mix2-download.mp3',
    popularity: 88
  },
  {
    id: '3',
    title: 'Techno Underground',
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80',
    duration: '2:00:00',
    genre: 'Techno',
    year: 2024,
    url: 'https://example.com/mix3.mp3',
    downloadUrl: 'https://example.com/mix3-download.mp3',
    popularity: 92
  },
  {
    id: '4',
    title: 'Progressive Dreams',
    coverImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80',
    duration: '1:30:00',
    genre: 'Progressive House',
    year: 2024,
    url: 'https://example.com/mix4.mp3',
    downloadUrl: 'https://example.com/mix4-download.mp3',
    popularity: 90
  },
  {
    id: '5',
    title: 'Midnight Groove',
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80',
    duration: '1:15:00',
    genre: 'Tech House',
    year: 2024,
    url: 'https://example.com/mix5.mp3',
    downloadUrl: 'https://example.com/mix5-download.mp3',
    popularity: 87
  },
  {
    id: '6',
    title: 'Sunset Sessions',
    coverImage: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80',
    duration: '2:30:00',
    genre: 'Melodic House',
    year: 2024,
    url: 'https://example.com/mix6.mp3',
    downloadUrl: 'https://example.com/mix6-download.mp3',
    popularity: 94
  }
];

export default function MixSection() {
  return (
    <section id="mixes">
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
            Latest Mixes
          </Typography>
          
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {mixes.map((mix, index) => (
              <Grid item xs={1} sm={4} md={4} key={mix.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MixPlayer mix={mix} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}