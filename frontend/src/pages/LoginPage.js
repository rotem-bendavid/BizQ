import React, { useState } from 'react';
import {
  Typography,
  Stack,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';
import { authenticateUser } from '../api/LoginApi';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await authenticateUser(email, password);

      if (!response.success) {
        alert(response.message);
        return;
      }
      window.location.href = '/';
      // Handle successful login (e.g., navigate, store token)
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack alignItems='center' justifyContent='center'>
      <FrostedBackground>
        <Typography variant='h2' gutterBottom>
        business owner login
        </Typography>

        <form onSubmit={handleLogin}>
          <Stack spacing={2}>
            {/* Email Input */}
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Password Input */}
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Submit Button */}
            <Button
              variant='contained'
              type='submit'
              sx={{ backgroundColor: 'black', borderRadius: '30px' }}
            >
              {isLoading ? (
                <CircularProgress
                  size={24}
                  sx={{ color: 'white' }}
                ></CircularProgress>
              ) : (
                <Typography variant='h5'>connect</Typography>
              )}
            </Button>
          </Stack>
        </form>
      </FrostedBackground>
    </Stack>
  );
};

export default LoginPage;
