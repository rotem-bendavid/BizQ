import React, { useState } from 'react';
import { Typography, Stack, TextField, Button } from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';


const LoginPage = () => {

  return (
    <Stack alignItems="center" justifyContent="center">
      <FrostedBackground>
        <Typography variant="h2" gutterBottom>
            התחברות בעלי עסקים
        </Typography>
        
        <form>
            <Stack spacing={2}>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                required
            />
            <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                required
            />
            <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: 'black', borderRadius: '30px' }}
            >
                <Typography variant="h5">התחבר</Typography>
            </Button>
            </Stack>
        </form>
      </FrostedBackground>
    </Stack>
  );
};

export default LoginPage;
