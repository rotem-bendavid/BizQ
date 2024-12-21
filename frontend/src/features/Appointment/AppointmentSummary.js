import React, { useState } from 'react';
import { TextField, Button, Stack, Typography } from '@mui/material';

const AppointmentSummary = ({
  selectedOption,
  selectedDate,
  selectedTime,
  clientName,
  clientMail,
  clientPhone,
  specialRequest,
  onSpecialRequestChange,
  onClientNameChange,
  onClientMailChange,
  onClientPhoneChange,
  onSubmit,
}) => {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      spacing={3}
      sx={{
        overflowY: 'auto',
        height: '70vh',
        width: '100%',
      }}
      p={4}
    >
      <Typography variant='h4' textAlign='center'>
        סיכום פגישה
      </Typography>
      <Typography variant='h6' textAlign='center' color='gray'>
        {selectedOption}
      </Typography>
      <Typography variant='body2'>תאריך: {selectedDate}</Typography>
      <Typography variant='body1'>שעה: {selectedTime}</Typography>
      <TextField
        variant='outlined'
        label='שם מלא'
        fullWidth
        value={clientName}
        required
        onChange={(e) => onClientNameChange(e.target.value)}
      />
      <TextField
        variant='outlined'
        label='אימייל'
        fullWidth
        type='email'
        value={clientMail}
        required
        onChange={(e) => onClientMailChange(e.target.value)}
      />
      <TextField
        variant='outlined'
        label='טלפון'
        fullWidth
        value={clientPhone}
        required
        onChange={(e) => onClientPhoneChange(e.target.value)}
      />
      <TextField
        label='בקשה מיוחדת'
        multiline
        rows={4}
        value={specialRequest}
        onChange={(e) => onSpecialRequestChange(e.target.value)}
        fullWidth
      />
      <Button variant='contained' onClick={onSubmit}>
        אישור
      </Button>
    </Stack>
  );
};

export default AppointmentSummary;
