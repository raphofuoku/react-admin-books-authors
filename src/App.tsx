import React from 'react';
import { Admin, Resource, Layout, AppBar, Title } from 'react-admin';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import { dataProvider } from '../providers/dataProvider';
import BookList from '../components/books/BookList';
import BookEdit from '../components/books/BookEdit';
import BookCreate from '../components/books/BookCreate';
import AuthorList from '../components/authors/AuthorList';

// Custom App Bar with professional styling
const CustomAppBar = () => (
  <AppBar
    sx={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      '& .RaAppBar-title': {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }}
  >
    <Title title="Books Management System" />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <MenuBookIcon />
      <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
        Library Admin
      </Typography>
    </Box>
  </AppBar>
);

// Custom Layout with the new AppBar
const CustomLayout = (props: any) => (
  <Layout {...props} appBar={CustomAppBar} />
);

// Custom theme with professional colors
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
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Admin
        dataProvider={dataProvider}
        layout={CustomLayout}
        title="Books Management System"
      >
        <Resource
          name="books"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          icon={MenuBookIcon}
          options={{ label: 'Books' }}
        />
        <Resource
          name="authors"
          list={AuthorList}
          icon={PersonIcon}
          options={{ label: 'Authors' }}
        />
      </Admin>
    </ThemeProvider>
  );
};

export default App;