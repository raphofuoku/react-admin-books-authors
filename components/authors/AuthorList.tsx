import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  TopToolbar,
  ExportButton,
  SearchInput,
} from 'react-admin';
import { Card, Box } from '@mui/material';

// Custom filters for the author list
const authorFilters = [
  <SearchInput source="name" placeholder="Search by name" alwaysOn />,
];

// Custom list actions
const ListActions = () => (
  <TopToolbar>
    <ExportButton />
  </TopToolbar>
);

const AuthorList: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card sx={{ padding: 3 }}>
        <List
          filters={authorFilters}
          perPage={10}
          actions={<ListActions />}
          sx={{
            '& .RaList-content': {
              boxShadow: 'none',
            },
          }}
        >
          <Datagrid
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
              source="name"
              label="Author Name"
              sortable={true}
              sx={{ fontWeight: 500 }}
            />
            <NumberField
              source="birthYear"
              label="Birth Year"
              sortable={true}
            />
          </Datagrid>
        </List>
      </Card>
    </Box>
  );
};

export default AuthorList;