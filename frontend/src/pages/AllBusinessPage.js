import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import BackGround from '../features/BackGround';
import WestIcon from '@mui/icons-material/West';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AppHeader from '../features/AppHeader';
import BusinessComponent from '../features/AllBusinessPage/BusinessComponent';
const AllBusinessPage = () => {
  const history = useHistory();

  return (
    <Stack alignItems={'center'} sx={{ height: '95vh', overflow: 'hidden' }}>
      <BackGround></BackGround>
      <AppHeader></AppHeader>
      <Stack alignItems={'center'} p={2} spacing={2}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          spacing={4}
          sx={{ width: '100%' }}
          justifyContent={'center'}
        >
          <IconButton
            sx={{ backgroundColor: 'white' }}
            onClick={() => {
              history.goBack();
            }}
          >
            <WestIcon sx={{ fontSize: '30px', color: 'black' }}></WestIcon>
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
            ></TextField>
          </Stack>
          <IconButton
            sx={{ backgroundColor: 'white' }}
            onClick={() => {
              history.goBack();
            }}
          >
            <SearchIcon sx={{ fontSize: '30px', color: 'black' }}></SearchIcon>
          </IconButton>
        </Stack>
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
    </Stack>
  );
};

export default AllBusinessPage;
