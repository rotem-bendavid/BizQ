import { Stack, Typography } from '@mui/material';
import React from 'react';

const OptionComponent = ({ optionObj, onSelect }) => {
  return (
    <Stack
      direction={'row'}
      sx={{ direction: 'rtl', width: '100%', borderBottom: '1px solid gray' }}
      justifyContent={'space-around'}
      alignItems={'center'}
      pb={2}
    >
      <div onClick={() => onSelect(optionObj.id, optionObj.name)} style={{ cursor: 'pointer', width: '80%' }}>
        <Stack direction={'row'} justifyContent="space-between" alignItems="center">
          <Typography variant='h5'>{optionObj.name}</Typography>
          <Typography sx={{ color: 'gray' }}>{optionObj.price} ש"ח</Typography>
        </Stack>
      </div>
    </Stack>
  );
};

export default OptionComponent;
