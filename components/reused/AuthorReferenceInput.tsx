import React from 'react';
import { ReferenceInput, SelectInput } from 'react-admin';
import { AuthorReferenceInputProps } from '../../types';

const AuthorReferenceInput: React.FC<AuthorReferenceInputProps> = ({
  source,
  label = 'Author',
  required = false,
  fullWidth = true,
}) => {
  return (
    <ReferenceInput
      source={source}
      reference="authors"
      label={label}
      fullWidth={fullWidth}
    >
      <SelectInput
        optionText="name"
        optionValue="id"
        required={required}
        fullWidth={fullWidth}
        sx={{
          '& .MuiInputBase-root': {
            borderRadius: '8px',
          },
        }}
      />
    </ReferenceInput>
  );
};

export default AuthorReferenceInput;