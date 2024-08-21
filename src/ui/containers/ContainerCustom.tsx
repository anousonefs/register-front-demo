import { Container, ContainerProps } from '@mui/material';
import React, { ReactNode } from 'react';

/**
 * Props for the ContainerCustomProps component.
 */
interface ContainerCustomProps extends ContainerProps {
  children: ReactNode;
}

// Represents a custom container component.
const ContainerCustom: React.FC<ContainerCustomProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container
      maxWidth='xl'
      sx={{
        paddingBottom: '5rem',
        overflowX: 'auto', // Optional: Hide overflow if content exceeds the fixed size
        overflowY: 'auto', // Optional: Hide overflow if content exceeds the fixed size
        margin: 'auto', // Optional: Center the content horizontally
        height: '100%',
        minHeight: '50vh', // Ensure it always fills the viewport height
        '@media (max-width: 1920px)': {
          width: '100%',
          minHeight: '50vh',
        },
        '@media (min-width: 1920px)': {
          minHeight: '580px',
        },
        '@media (max-width: 1024px)': {
          minHeight: '50vh',
        },
        '@media (max-width: 768px)': {
          minHeight: '50vh',
        },
      }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default ContainerCustom;
