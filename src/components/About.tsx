import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from '@mui/material';
import {
  EmojiEvents,
  MusicNote,
  Groups,
  Star
} from '@mui/icons-material';

export default function About() {
  const achievements = [
    {
      icon: EmojiEvents,
      title: '10+ Years Experience',
      description: 'Crafting unforgettable musical experiences since 2010'
    },
    {
      icon: MusicNote,
      title: '500+ Events',
      description: 'Performed at major festivals and exclusive venues worldwide'
    },
    {
      icon: Groups,
      title: '1M+ Listeners',
      description: 'Growing community of music lovers and supporters'
    },
    {
      icon: Star,
      title: 'Top 100 DJs',
      description: "Ranked in DJ Mag's Top 100 DJs list"
    }
  ];

  return (
    <section id="about" className="py-20">
      <Container maxWidth="lg">
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
            sx={{ mb: 8 }}
          >
            About DJ PULSE
          </Typography>
          
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" gutterBottom>
                  The Journey
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  Starting from humble beginnings in local clubs, DJ PULSE has evolved into
                  one of the most sought-after electronic music artists in the industry.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  With a unique blend of house, techno, and progressive elements,
                  each set is crafted to take listeners on an unforgettable journey
                  through sound and emotion.
                </Typography>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1563841930606-67e2bce48b78?auto=format&fit=crop&q=80"
                  alt="DJ PULSE performing"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    transform: 'perspective(1000px) rotateY(-5deg)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg)',
                    },
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={3} key={achievement.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: 'rgba(147, 51, 234, 0.1)',
                          mb: 2,
                        }}
                      >
                        <achievement.icon sx={{ fontSize: 32, color: 'primary.main' }} />
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {achievement.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}