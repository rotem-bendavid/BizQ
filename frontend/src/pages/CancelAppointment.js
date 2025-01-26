import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FrostedBackground from '../features/Generics/FrostedBackground';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { cancelAppointment, getAppointment } from '../api/Appointment';
import dayjs from 'dayjs';

const CancelAppointment = () => {
  const { appointmentId } = useParams();
  const history = useHistory();
  const [appointment, setAppointment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleCancelAppointment = async (appointmentId) => {
    if (window.confirm(`האם אתם בטוחים שאתם רוצים לבטל את התור?`)) {
      try {
        const result = await cancelAppointment(appointmentId);

        if (result.success) {
          alert('התור בוטל בהצלחה');
          history.push('/');
        } else {
          alert(`התור לא בוטל אנו נסו שוב`);
        }
      } catch (error) {
        console.log(`An error occurred: ${error.message}`);
      }
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getAppointment(appointmentId).then((data) => {
      console.log(data?.data);
      setAppointment(data?.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Stack alignItems='center' py={2}>
      <FrostedBackground>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Typography
            variant='h5'
            sx={{ direction: 'rtl', width: '100%', textAlign: 'start' }}
          >
            התור שלך:
          </Typography>
          {isLoading ? (
            <CircularProgress
              sx={{ color: 'black' }}
              size={'24px'}
            ></CircularProgress>
          ) : (
            <Stack
              sx={{ direction: 'rtl', alignItems: 'start', width: '100%' }}
              direction={'row'}
              alignItems='center'
              justifyContent='space-between'
            >
              {' '}
              <Stack>
                <Typography variant='h6'>{appointment?.service} </Typography>
                <Typography>
                  בתאריך{' '}
                  {dayjs(appointment?.startDate).format('DD/MM/YYYY H:mm')}
                </Typography>
              </Stack>
              <Button
                onClick={() => handleCancelAppointment(appointmentId)}
                variant='contained'
                color='error'
              >
                ביטול התור
              </Button>
            </Stack>
          )}
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default CancelAppointment;
