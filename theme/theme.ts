import { createTheme } from '@mui/material/styles';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#98a7f0',
      dark: '#4c63d2',
    },
    secondary: {
      main: '#764ba2',
      light: '#9575cd',
      dark: '#512da8',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#334155',
      secondary: '#64748b',
    }
  },

  typography: {
    h6: {
      fontWeight: 600,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          borderRadius: '12px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f1f5f9',
            fontWeight: 600,
            color: '#334155',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          '&:focus': {
            outline: '2px solid #667eea',
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                '&:focus-visible': {
                    outline: '2px solid',
                    outlineOffset: '2px',
                    outlineColor: '#667eea',
                },
            },
        },
    },
  },
});

export default theme;