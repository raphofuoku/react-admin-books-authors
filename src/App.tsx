import { Admin, Resource } from 'react-admin';
import { ThemeProvider } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import { dataProvider } from '../providers/dataProvider';
import { Layout } from './Layout';
import BookList from '../components/books/BookList';
import BookEdit from '../components/books/BookEdit';
import BookCreate from '../components/books/BookCreate';
import AuthorList from '../components/authors/AuthorList';
import theme from '../theme/theme';
import queryClient from '../providers/queryClient';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Admin
        dataProvider={dataProvider}
        queryClient={queryClient}
        layout={Layout}
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