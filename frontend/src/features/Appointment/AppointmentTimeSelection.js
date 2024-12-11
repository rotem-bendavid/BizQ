import React, { useState } from 'react';
import { Button, Grid, Typography, Stack } from '@mui/material';

const AppointmentTimeSelection = ({ selectedDate, selectedTime, onTimeSelect }) => {
  // TODO: display the selected time
  const availableTimes = [
    '6:30', '7:15', '8:00', '8:45', '9:30', '10:15', '11:00', '11:45', '18:00', '18:45', '19:30', '20:00'
  ];

  return (
    <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
      <Typography variant='h4' textAlign='center'>בחר את השעה</Typography>
      <Typography variant='h6' textAlign='center' >{selectedDate}</Typography>
      <Grid container spacing={2} justifyContent={'center'}>
        {availableTimes.map((time) => (
          <Grid item key={time}>
            <Button variant='outlined' onClick={() => onTimeSelect(time)}>{time}</Button>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default AppointmentTimeSelection;
