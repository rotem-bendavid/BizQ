import { Stack, Typography } from '@mui/material';
import React from 'react';

const OptionComponent = ({ optionObj }) => {
  return (
    <Stack
      direction={'row'}
      sx={{ direction: 'rtl', width: '100%', borderBottom: '1px solid gray' }}
      justifyContent={'space-around'}
      alignItems={'center'}
      pb={2}
    >
      <Typography variant='h5'>{optionObj.name}</Typography>
      <Typography sx={{ color: 'gray' }}>{optionObj.price} ש"ח</Typography>
    </Stack>
  );
};

export default OptionComponent;
