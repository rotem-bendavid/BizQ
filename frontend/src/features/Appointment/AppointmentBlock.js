import React, { useState } from 'react';
import OptionsSection from './OptionsSection';
import ScheduleSection from './ScheduleSection';
import { Button, Stack } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const AppointmentBlock = ({ userId }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    <OptionsSection userId={userId} />,
    <ScheduleSection />,
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
        variant="contained"
        onClick={() => setCurrentSection((prev) => Math.max(prev - 1, 0))}
        disabled={currentSection === 0}
      >
        <ArrowCircleLeftIcon />
      </Button>
      {sections[currentSection]}
      <Button
        variant="contained"
        onClick={() => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1))}
        disabled={currentSection === sections.length - 1}
      >
        <ArrowCircleRightIcon />
      </Button>
    </Stack>
  );
};

export default AppointmentBlock;
