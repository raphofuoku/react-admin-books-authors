import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  BulkDeleteButton,
  SearchInput,
  ReferenceInput,
  SelectInput,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
} from 'react-admin';
import { Card, Box } from '@mui/material';

// Custom filters for the book list
const bookFilters = [
  <SearchInput source="title" placeholder="Search by title" alwaysOn />,
  <ReferenceInput source="authorId" reference="authors" label="Author">
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

// Custom bulk action buttons
const BulkActionButtons = () => (
  <>
    <BulkDeleteButton />
  </>
);

// Custom list actions
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const BookList: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card sx={{ padding: 3 }}>
        <List
          filters={bookFilters}
          perPage={10}
          actions={<ListActions />}
          sx={{
            '& .RaList-content': {
              boxShadow: 'none',
            },
          }}
        >
          <Datagrid
            bulkActionButtons={<BulkActionButtons />}
            sx={{
              '& .RaDatagrid-table': {
                backgroundColor: 'white',
              },
              '& .RaDatagrid-headerRow': {
                backgroundColor: '#f8fafc',
              },
              '& .MuiTableCell-root': {
                borderBottom: '1px solid #e2e8f0',
              },
              '& .RaDatagrid-rowEven': {
                backgroundColor: '#fafbfc',
              },
              '& .RaDatagrid-rowOdd': {
                backgroundColor: 'white',
              },
            }}
          >
            <TextField
              source="id"
              label="ID"
              sortable={true}
              sx={{ fontWeight: 600 }}
            />
            <TextField
              source="title"
              label="Title"
              sortable={true}
              sx={{ fontWeight: 500 }}
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
            />
          </Datagrid>
        </List>
      </Card>
    </Box>
  );
};

export default BookList;