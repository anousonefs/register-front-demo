import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Dialog as MuiDialog,
  SxProps,
  Typography,
} from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose?: () => void;
  actions?: ReactNode;
  actionLoading?: boolean;
  isFooter?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  maxHeight?: string | number; // Add maxHeight prop
  sx?: SxProps;
  closeButton?: string;
  showCloseButton?: boolean;
  sxContent?: SxProps;
}
const Dialog: FC<Props> = ({
  open,
  title,
  onClose,
  actions,
  children,
  actionLoading,
  isFooter = false,
  closeButton = 'cancel' as string,
  showCloseButton = true,
  maxHeight,
  sxContent,
  ...props
}) => {
  return (
    <MuiDialog open={open} onClose={onClose} {...props} fullWidth>
      {title && (
        <DialogTitle>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6'>{title}</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
        </DialogTitle>
      )}
      <DialogContent
        sx={{
          ...sxContent,
          minWidth: {
            xs: '100%',
            sm: '100%',
            md: '400px',
          },
          maxHeight: maxHeight || 'none', // Apply maxHeight if provided
          overflowY: maxHeight ? 'auto' : 'unset', // Ensure scroll if maxHeight is set
        }}
      >
        {children}
      </DialogContent>
      {isFooter && (
        <DialogActions>
          {showCloseButton && (
            <Button
              onClick={onClose}
              color='primary'
              variant='outlined'
              disabled={actionLoading}
            >
              {closeButton}
            </Button>
          )}
          {actions}
        </DialogActions>
      )}
    </MuiDialog>
  );
};

export default Dialog;
