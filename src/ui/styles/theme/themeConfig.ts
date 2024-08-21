import { red } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';
import { ReactNode } from 'react';

type Color = 'inherit' | 'primary' | 'secondary';
export const fontFamily = 'Roboto, Noto Sans Lao, sans-serif';
export const lightMode: ThemeOptions = {
  palette: {
    primary: {
      main: '#1976D2',
      light: '#ffffff',
      dark: '#1976D2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#0079a7',
    },
    error: {
      main: red.A400,
      light: '#ff5f52',
      dark: '#c41c00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#E5E5E5',
    },
    text: {
      primary: '#1976D2',
      secondary: '#000000',
      disabled: '#8c8c8c',
    },
    common: {
      black: '#fffff',
      white: '#000000',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    mode: 'light',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        fontFamily: fontFamily,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          tableLayout: 'auto',
          minWidth: 'max-content',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: fontFamily,
          fontWeight: 'bold',
        },
        root: {
          fontFamily: fontFamily,
          color: 'black',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
        containedPrimary: {
          '&.MuiButton-contained': {
            backgroundColor: '#1565c0',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            textDecoration: 'auto',
          },
          fontFamily: fontFamily,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#eeeeee',
        },
        track: {
          backgroundColor: '#212121',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: fontFamily,
          color: 'white',
          fontSize: '12px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: fontFamily,
        },
      },
    },
  },
};

export interface Layout {
  name: string;
  component: ReactNode;
}
export interface ThemeSetting {
  mode: {
    light: ThemeOptions;
  };
  layout: Array<Layout>;
  banner: {
    position: 'toolbar' | 'sidebar';
  };
  content: {
    backgroundColor: string;
    paperColor: string;
    textColor: string;
    whiteColor: string;
    color: string;
    buttonColor: string;
    bgInput: string;
    pageLayoutColor: string;
  };
  sidebar: {
    backgroundColor: string;
    textColor: string;
    rgbColor: string;
    whiteColor: string;
    drawerWidth: number;
    color: string;
    bgButton: string;
    header: {
      elevation: number;
      color?: Color;
    };
    transition: {
      duration: number;
      easing: string;
    };
  };
  toolbar: {
    color: string;
    textColor: Color;
    buttonColor: Color;
  };
}

const setting: ThemeSetting = {
  mode: {
    light: lightMode,
  },
  layout: [],
  banner: {
    position: 'toolbar',
  },
  content: {
    backgroundColor: '#E5E5E5',
    paperColor: '#E5E5E5',
    textColor: '#000',
    whiteColor: '#ffffff',
    color: '#42A5F5',
    buttonColor: '#2196f3',
    bgInput: '#ccdcf9',
    pageLayoutColor: '#FAFAFB',
  },
  sidebar: {
    backgroundColor: '#0953A0',
    textColor: '#424242',
    rgbColor: '#2196F34D',
    whiteColor: 'rgb(255,250,250, 0.2)',
    drawerWidth: 260,
    color: '#424242',
    bgButton: 'rgb(66, 165, 245, 1);',
    header: {
      elevation: 0,
      color: 'secondary',
    },
    transition: {
      duration: 225,
      easing: 'easeInOut',
    },
  },
  toolbar: {
    color: '#616161',
    textColor: 'secondary',
    buttonColor: 'primary',
  },
};

export default setting;
