import { Stack, Typography } from '@mui/material';
import React from 'react';
import OptionComponent from './OptionComponent';

const OptionsSection = ({ selectedTypeId, onTypeSelect }) => {

  // TODO: view the selectedTypeId
  return (
    <Stack spacing={1}>
      <Typography variant='h2'>מוצרים לבחירה</Typography>
      <Stack
        sx={{
          width: '100%',
          height: '40vh',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          backgroundColor: '#FFFFFF90',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar in WebKit browsers
          },
          '-ms-overflow-style': 'none', // Hide scrollbar in IE and Edge
          'scrollbar-width': 'none',
        }}
        alignItems={'center'}
        py={2}
        spacing={2}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <OptionComponent
            key={index}
            optionObj={{ id: index, name: "מניקור ג'ל", price: 100 }}
            onSelect={onTypeSelect} // Pass the callback to handle selection
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default OptionsSection;
