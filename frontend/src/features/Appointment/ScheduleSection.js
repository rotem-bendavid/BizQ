import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ScheduleSection = ({ selectedDate, onDateSelect }) => {
  // const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

  return (
    <Stack spacing={-2} alignItems='center'>
      <Typography variant='h2'>ביחרו תאריך</Typography>
      <Stack sx={{ scale: '0.8' }} alignItems={'start'}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            value={selectedDate} // TODO: it is not working, fix
            onChange={(newValue) => {
              const formattedDate = dayjs(newValue).format('DD/MM/YYYY');
              onDateSelect(formattedDate);
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
