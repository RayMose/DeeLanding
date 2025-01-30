import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import {
  CalendarMonth,
  LocationOn
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import type { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="200"
            image={event.image}
            alt={event.name}
            sx={{
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <Chip
            label={event.type}
            color="primary"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backdropFilter: 'blur(4px)',
            }}
          />
        </Box>

        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {event.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <CalendarMonth fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {event.date}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <LocationOn fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {event.location}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
            {event.description}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{
              mt: 'auto',
              borderRadius: '9999px',
            }}
          >
            Buy Tickets
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}