import React from 'react';
import { Stack, Typography } from '@mui/material';

const OptionComponent = ({ optionId, optionObj, onSelect }) => {  
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
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
      <div onClick={() => onSelect(optionId, optionObj.name)} style={{ cursor: 'pointer', width: '80%' }}>
        <Stack direction={'row'} justifyContent="space-between" alignItems="center">
          <Typography variant='h5'>{optionObj.name}</Typography>
          <Typography sx={{ color: 'gray' }}>{optionObj.price} ש"ח</Typography>
          <Typography sx={{ color: 'gray' }}>{optionObj.time} דקות</Typography>
        </Stack>
      </div>
    </Stack>
  );
};

export default OptionComponent;
