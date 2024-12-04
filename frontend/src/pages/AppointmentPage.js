import { Stack } from '@mui/material';
import React from 'react';
import FrostedBackground from '../features/FrostedBackground';
import AppointmentBlock from '../features/Appointment/AppointmentBlock';

const AppointmentPage = () => {
  return (
    <Stack alignItems={'center'} pt={2}>
      <FrostedBackground>
        <AppointmentBlock></AppointmentBlock>
      </FrostedBackground>
    </Stack>
  );
};

export default AppointmentPage;
