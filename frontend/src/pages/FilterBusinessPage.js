import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BusinessComponent from '../features/FilterBusinessPage/BusinessComponent';
import FrostedBackground from '../features/FrostedBackground';

const FilterBusinessPage = () => {
  const history = useHistory();
  const [location, setLocation] = useState(localStorage.getItem('currentCity'));
  return (
    <Stack alignItems={'center'} sx={{ height: '90%', overflow: 'hidden' }}>
      <FrostedBackground>
        <Stack alignItems={'center'} p={2} spacing={2}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={4}
            sx={{ width: '100%' }}
            justifyContent={'center'}
          >
            {/* <IconButton
              sx={{ backgroundColor: 'white' }}
              onClick={() => {
                history.goBack();
              }}
            >
              <WestIcon sx={{ fontSize: '30px', color: 'black' }}></WestIcon>
            </IconButton> */}
            <IconButton
              sx={{ backgroundColor: 'white' }}
              // onClick={() => {
              //   history.goBack();
              // }}
            >
              <SearchIcon
                sx={{ fontSize: '30px', color: 'black' }}
              ></SearchIcon>
            </IconButton>
            <Stack
              sx={{
                borderRadius: '30px',
                backgroundColor: 'white',
                width: '30vw',
              }}
            >
              <TextField
                placeholder='פילטור לפי עיר'
                sx={{
                  direction: 'rtl',
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
                value={location}
              ></TextField>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: '100%',
              height: '55vh',
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
              <BusinessComponent
                key={index} // Unique key for each component
                businessObj={{
                  name: 'אברהם ויוסף',
                  location: { address: 'רמת יוסף 4', city: 'תל אביב' },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </FrostedBackground>
    </Stack>
  );
};

export default FilterBusinessPage;
