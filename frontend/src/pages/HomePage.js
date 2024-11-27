import React from 'react';
import {
  Button,
  Typography,
  Stack,
  IconButton,
  Card,
  Grid,
} from '@mui/material';
import BackGround from '../features/BackGround';
import { TOPICS } from '../features/HomePage/data';
import TopicCube from '../features/HomePage/TopicCube';

const HomePage = () => {
  return (
    <Stack alignItems={'center'} sx={{ height: '95vh', overflowY: 'hidden' }}>
      <BackGround></BackGround>
      <Stack
        direction={'row'}
        p={4}
        justifyContent={'space-between'}
        width={'80%'}
      >
        <Button
          variant='contained'
          sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        >
          <Typography variant='h4'>הרשמה</Typography>
        </Button>
        <Button
          variant='contained'
          sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        >
          <Typography variant='h4'>כניסה</Typography>
        </Button>
      </Stack>
      <Stack
        sx={{
          width: '70%',
          height: '100%',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          backgroundColor: '#FFFFFF60',
          flex: '1',
        }}
        alignItems={'center'}
        p={2}
        px={6}
      >
        <Typography variant='h2'>BizQ</Typography>
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
      </Stack>
    </Stack>
  );
};

export default HomePage;
