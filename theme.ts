import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    desktop: true
  }
}

export const theme = createTheme({
  palette: {
    info: {
      main: '#FFB0AB',
    },
  },
  breakpoints: {
    values: {
      mobile: 429,
      tablet: 1025,
      desktop: 1921,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0',
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: '94px',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          padding: '0',
          color: 'black',
          textTransform: 'none',
          disableRipple: 'true',
          '&:hover': {
            backgroundColor: 'inherit',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          height: '50px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '20px',
          lineHeight: '23px',
        },
        root: {
          color: 'black',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          right: 3,
          top: 5,
          minWidth: '25px',
          minHeight: '25px',
          borderRadius: '25px',
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          border: 'none'
        }
      }
    }
  },
})
