# User Product Management and Contact APIs

This project provides a basic API for user authentication and product management using Node.js, Express.js, and MongoDB. It includes endpoints for user sign-up, sign-in, and product operations.

## Features

- User sign-up and sign-in with JWT authentication
- Product management operations (Create and Retrieve Products)
- Send Notifications via email

# API Endpoints 

## User Endpoints

### Sign Up
- **URL:** `http://localhost:6000/users/signup`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }


### Sign In

 **URL:** `http://localhost:6000/users/signin`

**Method:** `POST`

**Description:** Authenticate a user and return a JWT token.

**Request Headers:**
- Content-Type: `application/json`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```


## Product Endpoints

### Create Product

 **URL:** `http://localhost:6000/products/create`

**Method:** `POST`

**Description:** Upload a new product.

**Request Headers:**
- Content-Type: `application/json`

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "stock": "number"
}

```

### Fetch Products

 **URL:** `http://localhost:6000/products/fetch`

**Method:** `GET`

**Description:** Retrieve a list of all products.


### Contact Form API
- **URL:** `http://localhost:6000/contact`
- **Method:** `POST`
- **Description:** Handles contact form submissions and sends an email with the submitted details..
**Request Body:**

The request body should be in JSON format and include the following fields:
- `name` (string): The name of the person submitting the form.
- `email` (string): The email address of the person submitting the form.
- `message` (string): The message/content of the contact form.

**Example Request:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "message": "Hello, this is a test message!"
}
```

## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add your environment variables. Below is an example `.env` file:

**Example `.env` file:**
```env
SecretKey=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/defaultdb
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
