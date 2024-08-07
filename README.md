# User and Product Management API

This project provides a basic API for user authentication and product management using Node.js, Express.js, and MongoDB. It includes endpoints for user sign-up, sign-in, and product operations.

## Features

- User sign-up and sign-in with JWT authentication
- Product management operations (Create and Retrieve Products)

# API Endpoints Documentation

## User Endpoints
# API Documentation

## User Endpoints

### Sign Up
- **URL:** `http://localhost:3000/users/signup`
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

 **URL:** `http://localhost:3000/users/signin`

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

 **URL:** `http://localhost:3000/products/create`

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

 **URL:** `http://localhost:3000/products/fetch`

**Method:** `GET`

**Description:** Retrieve a list of all products.

