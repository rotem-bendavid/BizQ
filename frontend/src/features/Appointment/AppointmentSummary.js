import React, { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';

const AppointmentSummary = ({ selectedOption ,selectedDate ,selectedTime, specialRequest, onSpecialRequestChange, onSubmit }) => {
  
  return (
    <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
      <Typography variant='h4' textAlign='center'>סיכום פגישה</Typography>
      <Typography variant='h6' textAlign='center' color='gray'>{selectedOption}</Typography>
      <Typography variant='body2'>תאריך: {selectedDate}</Typography>
      <Typography variant='body1'>שעה: {selectedTime}</Typography>
      <TextField
        label="בקשה מיוחדת"
        multiline
        rows={4}
        value={specialRequest}
        onChange={(e) => onSpecialRequestChange(e.target.value)}
        fullWidth
      />
      <Button variant='contained' onClick={onSubmit}>אישור</Button>
    </Stack>
  );
};

export default AppointmentSummary;
