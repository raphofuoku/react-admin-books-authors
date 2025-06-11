import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  TopToolbar,
  ListButton,
} from 'react-admin';
import { Typography } from '@mui/material';
import AuthorReferenceInput from '../authors/AuthorReferenceInput';
import { BookFormData } from '../../types';

// Custom create actions
const CreateActions = () => (
  <TopToolbar>
    <ListButton />
  </TopToolbar>
);

const BookCreate = () => {
  return (
    <Create<BookFormData>
      actions={<CreateActions />}
      sx={{ padding: 2 }}
    >
      <SimpleForm
        sx={{
          maxWidth: 600,
          '& .MuiFormControl-root': {
          marginBottom: 2,
          }
        }}
      >
        <Typography variant="h6" component="h1" gutterBottom sx={{ color: '#334155', marginBottom: 3 }}>
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
            }
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
            }
          }}
        />
      </SimpleForm>
    </Create>
  );
};

export default BookCreate;