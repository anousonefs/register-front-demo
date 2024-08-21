import { Box, Button, Paper, Typography } from '@mui/material';
import pageNotFound from 'src/assets/page_not_found.png';

const PageNotFound = () => {
  return (
    <Box
      id='auth-layout'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#E5E5E5',
      }}
    >
      <Paper
        sx={{
          width: {
            md: '450px',
            sm: '100vh',
            xs: '100vh',
          },
          height: {
            md: '600px',
            sm: '100vh',
            xs: '100vh',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div id='wrapper'>
          <Box
            component='img'
            sx={{
              height: 433,
              width: 450,
              maxHeight: { xs: 333, md: 367 },
              maxWidth: { xs: 400, md: 400 },
              mt: '-90px',
            }}
            alt='page_not_found_image'
            src={pageNotFound}
          />
          <div id='info'>
            <Typography
              align='center'
              variant='h6'
              sx={{ mt: '0px', mb: '40px' }}
            >
              This page could not be found
            </Typography>
          </div>
        </div>
        <br />
        <Button
          color='error'
          variant='outlined'
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </Button>
      </Paper>
    </Box>
  );
};

export default PageNotFound;
