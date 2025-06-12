# React Admin Books Management System

A comprehensive Books and Authors management interface built with React Admin v5, TypeScript, and Material-UI.

## Features

### Books Management
- **List View**: Display books with ID, title, author name (via reference), and published year
- **Sorting**: All columns are sortable
- **Filtering**: Filter by title (partial match) and author
- **Pagination**: Configurable page size
- **Bulk Operations**: Bulk delete functionality
- **CRUD Operations**: Create, read, update, and delete books
- **Form Validation**: Comprehensive validation for all fields

### Authors Management
- **List View**: Display authors with ID, name, and birth year
- **Search**: Full-text search functionality
- **Export**: Export author data

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Reusable Components**: Custom `AuthorReferenceInput` component
- **Modern UI**: Clean, responsive design with Material-UI theming
- **Form Validation**: Client-side validation with helpful error messages
- **Reference Fields**: Proper relationship handling between books and authors


## Installation & Setup

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/raphofuoku/react-admin-books-authors.git
   cd react-admin-books-authors
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npx json-server --watch books.json --port 3001
   ```
   This will start the mock API server on `http://localhost:3001`

4. **Start the React Admin Application**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

## Usage

### Books Management
1. **View Books**: Navigate to the Books section to see all books
2. **Add Book**: Click "Create" to add a new book with title, author, and published year
3. **Edit Book**: Click on any book row or use the edit button to modify book details
4. **Filter Books**: Use the filter panel to search by title or filter by author
5. **Bulk Delete**: Select multiple books and use the bulk delete action

### Authors Management
1. **View Authors**: Navigate to the Authors section to see all authors
2. **Search Authors**: Use the search bar to find specific authors

## Component Details

### AuthorReferenceInput
A reusable component that wraps `ReferenceInput` and `SelectInput` to provide a consistent way to select authors across the application. Features:
- Type-safe props interface
- Configurable label and validation
- Consistent styling and behaviour
- Reusable across different forms

### Books List
Comprehensive list view with:
- Sortable columns (ID, Title, Author, Published Year)
- Advanced filtering (title search, author filter)
- Bulk operations
- Responsive design

### Books Edit/Create
Feature-rich forms with:
- Input validation (required fields, year range validation)
- Reference input for author selection
- Clean UI with organized sections

## Data Model

### Book
```typescript
interface Book {
  id: number;
  title: string;
  authorId: number;
  publishedYear: number;
}
```

### Author
```typescript
interface Author {
  id: number;
  name: string;
  birthYear: number;
}
```

## API Endpoints

The application uses json-server with the following endpoints:
- `GET /books` - List books
- `GET /books/:id` - Get book by ID
- `POST /books` - Create book
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book
- `GET /authors` - List authors
- `GET /authors/:id` - Get author by ID

## Customization

### Theme
The application uses a custom Material-UI theme defined in `App.tsx`. You can modify colors, typography, and component styles by updating the theme configuration.

### Validation
Form validation rules are defined in the respective edit/create components. You can customize validation by modifying the `validate` prop arrays.

### Filtering
Additional filters can be added by extending the filter components in the list views.

## Technologies Used

- **React 18**: Latest React with hooks and functional components
- **React Admin 5**: Modern admin interface framework
- **TypeScript**: Type safety and better developer experience
- **Material-UI**: Modern, accessible UI components
- **json-server**: Mock REST API for development