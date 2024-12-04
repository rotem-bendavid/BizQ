import React, { useState } from 'react';
import OptionsSection from './OptionsSection';
import ScheduleSection from './ScheduleSection';
import { Button, Stack, Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const AppointmentBlock = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <OptionsSection></OptionsSection>,
    <ScheduleSection></ScheduleSection>,
  ];

  return (
    <Stack
      alignItems={'center'}
      height={'80vh'}
      justifyContent={'space-between'}
      direction={'row'}
      width={'100%'}
    >
      <Button
        variant='contained'
        onClick={() => {
          setCurrentSection(currentSection - 1);
        }}
      >
        <ArrowCircleLeftIcon></ArrowCircleLeftIcon>{' '}
      </Button>
      {sections[currentSection]}
      <Button
        variant='contained'
        onClick={() => {
          setCurrentSection(currentSection + 1);
        }}
      >
        <ArrowCircleRightIcon></ArrowCircleRightIcon>
      </Button>
    </Stack>
  );
};

export default AppointmentBlock;
