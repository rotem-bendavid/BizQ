import React, { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';

const AppointmentSummary = ({ selectedTime }) => {
  const [specialRequest, setSpecialRequest] = useState('');

  const handleChange = (event) => {
    setSpecialRequest(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    alert(`Appointment Confirmed! Time: ${selectedTime}, Special Request: ${specialRequest}`);
  };

  return (
    <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
      <Typography variant='h4' textAlign='center'>סיכום פגישה</Typography>
      <Typography variant='h6' textAlign='center' color='gray'>תור לאימון אישי</Typography>
      <Typography variant='body1'>הפגישה: {selectedTime}</Typography>
      <Typography variant='body2'>תאריך: xx/xx/xxxx (יום)</Typography>
      <TextField
        label="בקשה מיוחדת"
        multiline
        rows={4}
        value={specialRequest}
        onChange={handleChange}
        fullWidth
      />
      <Button variant='contained' onClick={handleSubmit}>אישור</Button>
    </Stack>
  );
};

export default AppointmentSummary;
