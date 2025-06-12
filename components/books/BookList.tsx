import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  BulkDeleteButton,
  TextInput,
  ReferenceInput,
  SelectInput,
  TopToolbar,
  CreateButton,
  ExportButton,
  EditButton,
  FilterButton
} from 'react-admin';
import { Book } from '../../types';

// Custom filters for the book list
const bookFilters = [
  <TextInput
    source="title_like"
    label="Search by Title"
    key="title-search"
    alwaysOn
    resettable
  />,
  <ReferenceInput
    source="authorId"
    reference="authors"
    label="Author"
    key="author-filter"
  >
    <SelectInput optionText="name" />
  </ReferenceInput>
];

// Custom list actions
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const BookList = () => {
  return (
    <List<Book>
      filters={bookFilters}
      perPage={10}
      actions={<ListActions />}
      sx={{ padding: 2 }}
    >
      <Datagrid
        rowClick="edit"
        bulkActionButtons={<BulkDeleteButton />}
      >
        <TextField
          source="id"
          label="ID"
          sortable={true}
        />

        <TextField
          source="title"
          label="Title"
          sortable={true}
        />

        <ReferenceField
          source="authorId"
          reference="authors"
          label="Author"
          sortable={true}
        >
          <TextField source="name" />
        </ReferenceField>

        <NumberField
          source="publishedYear"
          label="Published Year"
          sortable={true}
          options={{ useGrouping: false }}
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default BookList;