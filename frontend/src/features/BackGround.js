import { Stack } from '@mui/material';

const BackGround = () => (
  <Stack
    sx={{
      backgroundImage: 'url(/static/wallpaper/BizQ.png)',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      zIndex: '-1',
      left: '0px',
      top: '0px',
      opacity: '0.4',
      filter: 'blur(5px)',
    }}
  ></Stack>
);
export default BackGround;
