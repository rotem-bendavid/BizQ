import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      width={'80%'}
      sx={{
        position: 'fixed', // Make navbar fixed
        top: 0,
        left: '50%',  // Move the navbar to the center horizontally
        transform: 'translateX(-50%)',  // Correct the offset of 50% left by shifting it back
        height: '10vh', // Set navbar height to 10%
        zIndex: 1000, // Ensure navbar stays above other content
        display: 'flex',
        alignItems: 'center', // Vertically center content inside navbar
        justifyContent: 'space-between', // Space out the buttons
      }}
    >
      <Button
        variant="contained"
        sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        component={Link} // Use React Router's Link for navigation
        to="/BusinessPage"
      >
        <Typography variant="h5">הרשמה</Typography>
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        component={Link} // Use React Router's Link for navigation
        to="/"
      >
        <img
          src="../static/nav/home-image.png" // Provide the correct image path
          alt="BizQ Home" // Alt text for the image
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px' }} // Style the image as needed
        />
      </Button>
      <Button
        variant="contained"
        sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        component={Link} // Use React Router's Link for navigation
        to="/Login"
      >
        <Typography variant="h5">כניסה</Typography>
      </Button>
    </Stack>
  );
};

export default NavBar;