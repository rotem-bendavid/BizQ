import { useLocation, useHistory, useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';
import AppointmentBlock from '../features/Appointment/AppointmentBlock';

const AppointmentPage = () => {
  const { id } = useParams();
  
  if (!id) {
    console.error('User ID is not provided. Redirecting to previous page.');
    return (
      <Typography color="error" align="center" mt={4}>
        שגיאה בטעינת הנתונים: User ID is not provided.
      </Typography>
    );
  }

  return (
    <Stack alignItems={'center'} pt={2}>
      <FrostedBackground>
        <AppointmentBlock/>
      </FrostedBackground>
    </Stack>
  );
};

export default AppointmentPage;
