import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

export const theme = createTheme({
  palette: {
    info: {
      main: '#FFB0AB'
    }
  },
  breakpoints: {
    values : {
      mobile: 0,
      tablet: 600,
      desktop: 1550,
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0',
          boxShadow: 'none'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '94px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
          },
          boxShadow: 'none',
          borderRadius: '15px',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root : {
          height: '50px'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '20px',
          lineHeight: '23px' 
        },
        root: {
          color: 'black'
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          right: 3,
          top: 5,
          minWidth: '25px',
          minHeight: '25px',
          borderRadius: '25px',
        }
      }
    },
  }
})