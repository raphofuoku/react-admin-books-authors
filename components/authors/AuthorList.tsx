import {
  List,
  Datagrid,
  TextField,
  NumberField,
  TopToolbar,
  ExportButton,
  SearchInput
} from 'react-admin';
import { Author } from '../../types';

// Custom filters for the author list
const authorFilters = [
  <SearchInput
    source="q"
    placeholder="Search by Name"
    key="search-author-name"
    alwaysOn
  />
];

// Custom list actions
const ListActions = () => (
  <TopToolbar>
    <ExportButton />
  </TopToolbar>
);

const AuthorList = () => {
  return (
    <List<Author>
      filters={authorFilters}
      perPage={10}
      actions={<ListActions />}
      sx={{ padding: 2 }}
    >
      <Datagrid>
        <TextField
          source="id"
          label="ID"
          sortable={true}
        />

        <TextField
        source="name"
        label="Author Name"
        sortable={true}
        />

        <NumberField
          source="birthYear"
          label="Birth Year"
          sortable={true}
          options={{ useGrouping: false }}
        />
      </Datagrid>
    </List>
  );
};

export default AuthorList;