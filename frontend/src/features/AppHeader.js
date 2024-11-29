import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const AppHeader = () => {
  return (
    <Stack
      direction={'row'}
      p={4}
      justifyContent={'space-between'}
      width={'80%'}
      alignItems={'center'}
    >
      <Button
        variant='contained'
        sx={{ backgroundColor: 'black', borderRadius: '30px' }}
      >
        <Typography variant='h4'>הרשמה</Typography>
      </Button>
      <Typography
        variant='h1'
        sx={{
          textShadow: '4px 4px 4px #FFFFFF', // Customize the shadow
          fontFamily: 'Norwester, Arial, sans-serif', // Add fallback fonts
        }}
      >
        BizQ
      </Typography>

      <Button
        variant='contained'
        sx={{ backgroundColor: 'black', borderRadius: '30px' }}
      >
        <Typography variant='h4'>כניסה</Typography>
      </Button>
    </Stack>
  );
};

export default AppHeader;
