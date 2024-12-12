import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ScheduleSection = ({ selectedDate, onDateSelect }) => {
  // Make sure selectedDate is a Dayjs object
  const selectedDateObj = dayjs(selectedDate, 'DD/MM/YYYY');
  console.log(selectedDateObj);

  return (
    <Stack spacing={-2} alignItems='center'>
      <Typography variant='h2'>בחרו תאריך</Typography>
      <Stack sx={{ scale: '0.8' }} alignItems={'start'}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            value={selectedDateObj} // Pass Dayjs object
            onChange={(newValue) => {
              const formattedDate = dayjs(newValue).format('DD/MM/YYYY');
              onDateSelect(formattedDate); // Pass formatted date string to onDateSelect
            }}
            slotProps={{
              textField: { variant: 'standard' },
            }}
            sx={{
              height: '400px',
              '& .Mui-selected': {
                backgroundColor: '#2196f3',
                color: '#ffffff',
              }, // Example: Customize selected date color
            }}
          />
        </LocalizationProvider>
      </Stack>
    </Stack>
  );
};

export default ScheduleSection;
