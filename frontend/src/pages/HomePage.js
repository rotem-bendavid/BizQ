import React from 'react';
import {
  Button,
  Typography,
  Stack,
  IconButton,
  Card,
  Grid,
} from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';
import { TOPICS } from '../features/HomePage/data';
import TopicCube from '../features/HomePage/TopicCube';

const HomePage = () => {
  return (
    <Stack alignItems={'center'} sx={{ height: '80vh', overflowY: 'hidden' }}>
      <FrostedBackground>
        <Typography variant='h1'>BizQ</Typography>
        <Typography variant='h4'>פלטפורמת תזמון חכמה</Typography>
        <Typography variant='h4'>מחברת עסקים ולקוחות בפתרון אחד פשוט</Typography>
        <Stack
          direction='row' // Set row direction for horizontal alignment
          spacing={4} // Space between cubes
          justifyContent='center' // Center cubes horizontally
          alignItems='center' // Center cubes vertically
          sx={{ width: '100%', height: '100%' }} // Adjust dimensions as needed
        >
          {TOPICS.map((topic) => (
            <TopicCube topicObj={topic}></TopicCube>
          ))}{' '}
        </Stack>
        <Button
          variant='contained'
          sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        >
          <Typography variant='h5'>הצג הכל</Typography>
        </Button>
      </FrostedBackground>
    </Stack>
  );
};

export default HomePage;
