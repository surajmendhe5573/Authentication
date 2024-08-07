# User and Product Management API

This project provides a basic API for user authentication and product management using Node.js, Express.js, and MongoDB. It includes endpoints for user sign-up, sign-in, and product operations.

## Features

- User sign-up and sign-in with JWT authentication
- Product management operations (Create and Retrieve Products)

# API Endpoints Documentation

## User Endpoints

### Sign Up

**URL:** `/users/signup`

**Method:** `POST`

**Description:** Registers a new user.

**Request Headers:**
- Content-Type: `application/json`

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```



### Sign In

**URL:** `/users/signin`

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

**URL:** `/products/create`

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

**URL:** `/products/fetch`

**Method:** `GET`

**Description:** Retrieve a list of all products.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/surajmendhe5573/Authentication.git
