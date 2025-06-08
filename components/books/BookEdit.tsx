import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  TopToolbar,
  ListButton,
  ShowButton,
} from 'react-admin';
import { Card, Box, Typography } from '@mui/material';
import AuthorReferenceInput from '../reused/AuthorReferenceInput';

// Custom edit actions
const EditActions = () => (
  <TopToolbar>
    <ListButton />
    <ShowButton />
  </TopToolbar>
);

const BookEdit: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Card sx={{ padding: 3 }}>
        <Edit
          actions={<EditActions />}
          sx={{
            '& .RaEdit-card': {
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
              Edit Book Details
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
        </Edit>
      </Card>
    </Box>
  );
};

export default BookEdit;