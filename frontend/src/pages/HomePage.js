import React from 'react';
import { Button, Typography, Stack } from '@mui/material';
import FrostedBackground from '../features/FrostedBackground';
import { TOPICS } from '../features/HomePage/data';
import TopicCube from '../features/HomePage/TopicCube';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const handleCategoryClick = (categoryId) => {
    history.push(`/FilterBusiness/${categoryId}`);
  };

  const handleShowAllClick = () => {
    history.push(`/FilterBusiness/all`);
  };

  return (
    <Stack alignItems="center" sx={{ height: '80vh', overflowY: 'hidden' }}>
      <FrostedBackground>
       <Typography variant="h1">
        BizQ
        </Typography>
        <Typography variant="h4">
         Smart scheduling platform
        </Typography>
        <Typography variant="h4">
          connecting businesses and customers in one simple solution
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', height: '100%' }}
        >
          {TOPICS.map((topic) => (
            <TopicCube
              key={topic.id}
              topicObj={topic}
              onClick={() => handleCategoryClick(topic.id)}
            />
          ))}
        </Stack>
        <Button
          onClick={handleShowAllClick}
          variant="contained"
          sx={{ backgroundColor: 'black', borderRadius: '30px' }}
        >
          <Typography variant="h5"> Show all</Typography>
        </Button>
      </FrostedBackground>
    </Stack>
  );
};

export default HomePage;
