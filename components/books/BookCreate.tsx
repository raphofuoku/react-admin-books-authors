import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  TopToolbar,
  ListButton,
} from 'react-admin';
import { Card, Box, Typography } from '@mui/material';
import AuthorReferenceInput from '../reused/AuthorReferenceInput';

// Custom create actions
const CreateActions = () => (
  <TopToolbar>
    <ListButton />
  </TopToolbar>
);

const BookCreate: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card sx={{ padding: 3 }}>
        <Create
          actions={<CreateActions />}
          sx={{
            '& .RaCreate-card': {
              boxShadow: 'none',
            },
          }}
        >
          <SimpleForm
            sx={{
              maxWidth: 600,
              '& .MuiFormControl-root': {
                marginBottom: 2,
              },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ color: '#334155', marginBottom: 3 }}>
              Add New Book
            </Typography>

            <TextInput
              source="title"
              label="Book Title"
              validate={[required()]}
              fullWidth
              sx={{
                '& .MuiInputBase-root': {
                  borderRadius: '8px',
                },
              }}
            />

            <AuthorReferenceInput
              source="authorId"
              label="Author"
              required={true}
            />

            <NumberInput
              source="publishedYear"
              label="Published Year"
              validate={[required()]}
              fullWidth
              sx={{
                '& .MuiInputBase-root': {
                  borderRadius: '8px',
                },
              }}
            />
          </SimpleForm>
        </Create>
      </Card>
    </Box>
  );
};

export default BookCreate;