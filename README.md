# Blog Application

This project is a Blog List and Details Exercise. The application allows users to view a list of blogs, filter and sort them, and view detailed information about individual blogs and their comments. Users can also post comments if possible.

## Features

1. **Blog List Page**:
    - Displays a list of blogs as per the provided UI.
    - Allows sorting and filtering using dropdowns.
    - Filters include:
      - Tags (with autocomplete functionality).
      - Users (with autocomplete functionality).
      - Title (using an input field).

2. **Blog Details Page**:
    - Displays detailed information about a selected blog.
    - Shows comments using local state management.
    - Allows posting comments (if supported by the API).

3. **Sorting and Filtering**:
    - Sorting and filtering options are based on the fields available in the API.
    - Provides a seamless user experience for filtering and sorting blogs.

## Guidelines Followed

1. **State Management**:
    - Used Redux and Redux-Saga for state management.

2. **Modern JavaScript**:
    - Utilized ES6+ features such as arrow functions, spread operators, and destructuring.

3. **Styling**:
    - Used a CSS framework like Bootstrap or Tailwind for styling.

4. **Forms**:
    - Used Formik with Yup for form handling and validation.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd BlogApplication
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Folder Structure

- `/src`: Contains the source code.
  - `/components`: Reusable React components.
  - `/redux`: Redux store, actions, and sagas.
  - `/pages`: Blog list and details pages.
  - `/styles`: CSS or Tailwind configuration.
  - `/utils`: Utility functions and helpers.

## API Integration

- The application fetches data from the provided APIs.
- Components gracefully handle cases where data is unavailable.

## Future Enhancements

- Add more advanced filtering options.
- Improve UI/UX based on user feedback.
- Implement additional features as required.
# blogApp
