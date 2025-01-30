import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Grid,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from '@mui/icons-material';
import ContactForm from './ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: LocationOn,
      title: 'Location',
      details: 'Miami Beach, FL 33139'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: Email,
      title: 'Email',
      details: 'contact@djpulse.com'
    },
    {
      icon: AccessTime,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM'
    }
  ];

  return (
    <section id="contact" className="py-20">
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
            Get In Touch
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                  Contact Information
                </Typography>
                <Stack spacing={4}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            bgcolor: 'rgba(147, 51, 234, 0.1)',
                          }}
                        >
                          <info.icon sx={{ color: 'primary.main' }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" gutterBottom>
                            {info.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {info.details}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                    Send a Message
                  </Typography>
                  <ContactForm />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
}