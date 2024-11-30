import React from 'react';
import { Button, Typography, Stack, IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import OptionInput from '../features/SignInPage/OptionInput';
import { WEEK_DAYS } from '../features/SignInPage/data';
import FrostedBackground from '../features/FrostedBackground';

const SignInPage = () => {
  return (
    <Stack spacing={2} alignItems={'center'} sx={{}}>
      <FrostedBackground>
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <IconButton color='black'>
            <WestIcon sx={{ fontSize: '40px' }} />
          </IconButton>
          <Typography variant='h3'>Create your business</Typography>
        </Stack>
        <Stack>
          <Typography variant='h6'>Add your options</Typography>
          <Stack spacing={2} p={2}>
            <OptionInput></OptionInput>
          </Stack>
        </Stack>
        <Stack>
          <Typography>Choose your working days</Typography>
          <Stack direction={'row'} spacing={2} p={2}>
            {WEEK_DAYS.map((day) => (
              <Button variant='contained'>{day}</Button>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Typography>Choose your working hours</Typography>
          <Stack direction={'row'} spacing={4} p={2}>
            <Stack direction={'row'} spacing={1}>
              <Typography>from</Typography>
              <input type='time'></input>
            </Stack>
            <Stack direction={'row'} spacing={1}>
              <Typography>to</Typography>
              <input type='time'></input>
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={'center'}>
          <Button sx={{ width: '100px' }} variant='contained'>
            Save
          </Button>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default SignInPage;
