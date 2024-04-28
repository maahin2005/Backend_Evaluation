# Backend Evaluation

### Basic Setup and Express Server

  - Initialize a Node.js project and install dependencies: Express, Mongoose, bcryptjs, jsonwebtoken, dotenv.

### Database Connection

  -  Connect to MongoDB with Mongoose, ensuring proper error handling.

### Middleware Implementation

 - Implement middleware for verifying user authentication.
 - Implement middleware for Patch and Delete.

### CRUD Operations with Advanced Features

  - Implement CRUD operations for managing books and reviews in the user's library.
  -  All Books will be visible to all users.
  - Ensure users can only modify or delete their own Books.
  -  Enable dynamic pagination for book listings, allowing users to specify the number of books per page with a default of 10 if not specified.
  -  Allow filtering of books based on book status using query parameters.
  -  Add a search feature to find books by title or author within the user's library.

### User Authentication and Registration

  -  Securely handle user registration and login, using hashing for password(bcrypt) and JWT for session management.

## Environment variables

### PORT=
### MONGODB_URI=
### SECRET_KEY=


