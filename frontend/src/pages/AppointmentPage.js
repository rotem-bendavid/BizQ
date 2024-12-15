import { useLocation, useHistory } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';
import AppointmentBlock from '../features/Appointment/AppointmentBlock';

const AppointmentPage = () => {
  const location = useLocation();
  const history = useHistory();

  const { userId } = location.state || {};
  if (!userId) {
    console.error('User ID is not provided. Redirecting to previous page.');
    history.push('/');
    return (
      <Typography color="error" align="center" mt={4}>
        שגיאה בטעינת הנתונים: User ID is not provided.
      </Typography>
    );
  }

  return (
    <Stack alignItems={'center'} pt={2}>
      <FrostedBackground>
        <AppointmentBlock userId={userId} />
      </FrostedBackground>
    </Stack>
  );
};

export default AppointmentPage;
