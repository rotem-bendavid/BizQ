import React, { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  Stack,
  CircularProgress,
} from '@mui/material';
import dayjs from 'dayjs';
import { getAllTodayAppointments } from '../../api/Appointment';

const AppointmentTimeSelection = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
  businessData,
}) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      setIsLoading(true);
      try {
        // Fetch scheduled appointments for the given business and date
        const response = await getAllTodayAppointments(
          selectedDate,
          businessData.userId
        );

        const scheduledAppointments = response?.data || [];
        const scheduledTimes = scheduledAppointments.map(
          (appointment) => appointment.time
        );


        const { from, to } = businessData?.workingHours;
        const startTime = dayjs(from, 'H:mm');
        const endTime = dayjs(to, 'H:mm');
        let hours = [];
        let currentTime = startTime;
        setIsLoading(true);
        while (currentTime.isBefore(endTime) || currentTime.isSame(endTime)) {
          hours.push(currentTime.format('H:mm'));
          currentTime = currentTime.add(30, 'minute');
        }

        setAvailableTimes(hours);
      } catch (error) {
        console.error('Error fetching appointment times:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedDate && businessData?.userId) {
      fetchAvailableTimes();
    }
  }, [selectedDate, businessData]);

  return (
    <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
      <Typography variant='h4' textAlign='center'>
        בחר את השעה
      </Typography>
      <Typography variant='h6' textAlign='center'>
        {selectedDate}
      </Typography>
      {isLoading ? (
        <CircularProgress
          sx={{ fontSize: '30px', color: 'black' }}
        ></CircularProgress>
      ) : (
        <Grid container spacing={2} justifyContent={'center'}>
          {availableTimes.map((time) => (
            <Grid item key={time}>
              <Button
                variant='contained'
                style={{
                  backgroundColor:
                    selectedTime === time ? '#1976d2' : '#808080',
                }}
                onClick={() => onTimeSelect(time)}
              >
                {time}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default AppointmentTimeSelection;

//variant={selectedTime === time ? 'contained' : 'outlined'} // Apply "contained" if it's selected
//{selectedTime === time ? 'blue' : 'gray'}
