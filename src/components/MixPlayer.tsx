import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  LinearProgress,
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  Download
} from '@mui/icons-material';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import type { Mix } from '../types';

interface MixPlayerProps {
  mix: Mix;
}

export default function MixPlayer({ mix }: MixPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <CardMedia
          component="img"
          height="280"
          image={mix.coverImage}
          alt={mix.title}
          sx={{
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {mix.title}
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {mix.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mix.duration}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={() => setIsPlaying(!isPlaying)}
              sx={{
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            
            <Box sx={{ flexGrow: 1 }}>
              <LinearProgress
                variant="determinate"
                value={0}
                sx={{
                  height: 4,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }}
              />
            </Box>
            
            <IconButton
              href={mix.downloadUrl}
              download
              sx={{ color: 'text.secondary' }}
            >
              <Download />
            </IconButton>
          </Box>
        </CardContent>
        
        <ReactPlayer
          url={mix.url}
          playing={isPlaying}
          width="0"
          height="0"
        />
      </Card>
    </motion.div>
  );
}