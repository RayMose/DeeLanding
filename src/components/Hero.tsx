import React from 'react';
import { motion } from 'framer-motion';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Container, Typography, Box } from '@mui/material';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?auto=format&fit=crop&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{
              color: 'white',
              fontSize: { xs: '3rem', md: '4.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            DJ PULSE
          </Typography>
          
          <Typography
            variant="h4"
            component="p"
            align="center"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' },
            }}
          >
            Creating Unforgettable Musical Experiences
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => scrollToSection('mixes')}
              sx={{ minWidth: 200 }}
            >
              Listen Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => scrollToSection('events')}
              sx={{
                minWidth: 200,
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              Upcoming Events
            </Button>
          </Box>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          animation: 'bounce 2s infinite',
        }}
      >
        <KeyboardArrowDown sx={{ fontSize: 40 }} />
      </motion.div>
    </Box>
  );
}