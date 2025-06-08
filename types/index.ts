export interface Book {
    id: number;
    title: string;
    authorId: number;
    publishedYear: number;
  }

  export interface Author {
    id: number;
    name: string;
    birthYear: number;
  }

  export interface BookFormData {
    title: string;
    authorId: number;
    publishedYear: number;
  }

  export interface AuthorReferenceInputProps {
    source: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
  }