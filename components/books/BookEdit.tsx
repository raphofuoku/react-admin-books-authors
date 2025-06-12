import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  TopToolbar,
  ListButton
} from 'react-admin';
import { Typography } from '@mui/material';
import AuthorReferenceInput from '../authors/AuthorReferenceInput';

// Custom edit actions
const EditActions = () => (
  <TopToolbar>
    <ListButton />
  </TopToolbar>
);

const BookEdit = () => {
  return (
        <Edit
          actions={<EditActions />}
          sx={{ padding: 2 }}
        >
          <SimpleForm
            sx={{
              maxWidth: 600,
              '& .MuiFormControl-root': {
                marginBottom: 2,
              },
            }}
          >
            <Typography variant="h6" component="h1" gutterBottom sx={{ color: '#334155', marginBottom: 3 }}>
              Edit Book Details
            </Typography>

            <TextInput
              source="title"
              label="Book Title"
              validate={[required()]}
              fullWidth
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
            />
          </SimpleForm>
        </Edit>
  );
};

export default BookEdit;