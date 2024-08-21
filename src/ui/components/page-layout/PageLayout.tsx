import { Box, Paper, Typography, styled } from '@mui/material';
import ContainerCustom from 'ui/containers/ContainerCustom';
import { FC, ReactNode } from 'react';
import 'ui/styles/css/contents.css';

/**
 * Represents a styled page layout component.
 * @component
 */
const StyledPage = styled(Box, {
  shouldForwardProp: (props) => props !== 'minFullScreen',
})<{ minFullScreen?: boolean }>(({ minFullScreen, theme }) => ({
  height: `calc(100vh - 64px)`,
  minHeight: `calc(100vh - 64px)`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem',
  ...(!minFullScreen && {
    height: '100%',
  }),
  [theme.breakpoints.down('sm')]: {
    height: '100%',
    marginTop: '64px',
  },
}));

/**
 * Styled component for the page content in the PageLayout component.
 *
 * @component
 * @param {boolean} minFullScreen - Determines if the page content should take up the full screen height.
 * @returns {ReactElement} The rendered PageContent component.
 */
const StylePageContent = styled(Box, {
  shouldForwardProp: (props) => props !== 'minFullScreen',
})<{ minFullScreen?: boolean }>(({ minFullScreen, theme }) => ({
  flex: 'none',
  ...(minFullScreen && {
    flex: '1 1 0%',
    [theme.breakpoints.down('sm')]: {
      flex: 'none',
      overflowY: 'auto',
    },
  }),
  [theme.breakpoints.down('sm')]: {
    flex: 'none',
    overflowY: 'auto',
  },
}));

interface Props {
  header?: ReactNode;
  title?: string;
  children: ReactNode;
  minFullScreen?: boolean;
  paper?: boolean;
}

const PageLayout: FC<Props> = ({
  children,
  title,
  header,
  minFullScreen = true,
  paper = true, // Add auth prop with default value false
}) => {
  return (
    <StyledPage minFullScreen={minFullScreen}>
      {header && header}
      <StylePageContent minFullScreen={minFullScreen}>
        <ContainerCustom>
          <Typography variant='h5'>{title || ''}</Typography>
          <Box sx={{ mt: 2 }}>
            {paper ? ( // Conditionally render Paper based on auth prop
              <Paper className='paper'>{children}</Paper>
            ) : (
              children
            )}
          </Box>
        </ContainerCustom>
      </StylePageContent>
    </StyledPage>
  );
};

export default PageLayout;
