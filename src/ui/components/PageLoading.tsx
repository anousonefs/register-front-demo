import { Avatar, Box, styled } from '@mui/material';
import logo from 'assets/react.svg';
import 'ui/styles/css/loading.css';

/**
 * Styled component for a page with loading indicator.
 * @param minFullScreen - Whether the page should take up the full screen height or not.
 */
export const StyledPage = styled(Box, {
  shouldForwardProp: (props) => props !== 'minFullScreen',
})<{ minFullScreen?: boolean }>(({ minFullScreen, theme }) => ({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
  backgroundColor: '#E5E5E5',
  ...(!minFullScreen && {
    height: '100%',
  }),
  [theme.breakpoints.down('sm')]: {
    height: '100%',
    marginTop: '64px',
  },
}));

/**
 * Styled component for the page content.
 *
 * @param minFullScreen - Whether the content should take up the full screen height when minimized.
 */
export const StylePageContent = styled(Box, {
  shouldForwardProp: (props) => props !== 'minFullScreen',
})<{ minFullScreen?: boolean }>(({ minFullScreen, theme }) => ({
  overflow: 'auto',
  flex: 'none',
  ...(minFullScreen && {
    flex: '1 1 0%',
    [theme.breakpoints.down('sm')]: {
      flex: 'none',
    },
  }),
  [theme.breakpoints.down('sm')]: {
    flex: 'none',
  },
}));

const PageLoading = () => {
  return (
    <StyledPage
      sx={{
        bgcolor: 'white',
      }}
      minFullScreen
    >
      <StylePageContent minFullScreen>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            justifyContent: 'center',
          }}
        >
          {/* Adding the loading spinner styles here */}
          <Box className='lds-ripple'>
            <Avatar
              className='logo-animation'
              src={logo}
              alt='JDB Logo'
              sx={{
                width: '200px',
                height: '200px',
                borderRadius: '0',
                boxShadow: 'none',
              }}
            />
            <div></div>
            <div></div>
          </Box>
        </Box>
      </StylePageContent>
    </StyledPage>
  );
};

export default PageLoading;
