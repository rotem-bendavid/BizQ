import React from 'react';
import { Stack, Typography } from '@mui/material';

const OptionComponent = ({ optionObj, onClick }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      onClick={() => onClick(optionObj)}
      sx={{
        width: '100%',
        borderBottom: '1px solid gray',
        padding: '10px 0',
        direction: 'rtl',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <Typography variant="body1">{optionObj.name || ''}</Typography>
      <Typography sx={{ color: 'gray' }}>{optionObj.price || ''} ש"ח</Typography>
      <Typography sx={{ color: 'gray' }}>{optionObj.time || ''} דקות</Typography>
    </Stack>
  );
};

export default OptionComponent;
