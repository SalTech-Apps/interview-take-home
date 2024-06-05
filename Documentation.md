# NestJS Job Application Documentation

## Overview

This is a NestJS application for managing jobs and messages between users. The application includes functionalities for user authentication, job management, and messaging. Below are the details of the available routes and how to test them.

## Table of Contents

- [Authentication](#authentication)
  - [Sign In](#sign-in)
- [Jobs](#jobs)
  - [Get Jobs](#get-jobs)
  - [Get Job by ID](#get-job-by-id)
  - [Create Job](#create-job)
- [Messages](#messages)
  - [Send Message](#send-message)
  - [Get Messages](#get-messages)

## Authentication

### Sign In

**Endpoint**: `/auth/login`

**Method**: `POST`

**Description**: Authenticates a user and returns a JWT token.

**Request Body**:
```json
{
  "username": "testuser",
  "password": "testpassword"
}
```

**Response**:
```json
{
  "accessToken": "your.jwt.token.here"
}
```

**How to Test**:
1. Open Postman.
2. Set the method to `POST` and the URL to `http://localhost:3000/auth/login`.
3. Go to the `Body` tab, select `raw`, and set the type to `JSON`.
4. Enter the request body JSON and send the request.
5. Copy the `accessToken` from the response for authenticated requests.

## Jobs

### Get Jobs

**Endpoint**: `/jobs`

**Method**: `GET`

**Description**: Retrieves a list of jobs for the authenticated user.

**Headers**:
- `Authorization`: `Bearer your.jwt.token.here`

**Response**:
```json
[
  {
    "id": "job-id",
    "title": "Job Title",
    "description": "Job Description",
    "status": "OPEN",
    "user": {
      "id": "user-id",
      "username": "testuser"
    }
  }
]
```

**How to Test**:
1. Set the method to `GET` and the URL to `http://localhost:3000/jobs`.
2. Go to the `Headers` tab and add:
   - Key: `Authorization`
   - Value: `Bearer your.jwt.token.here`
3. Send the request.

### Get Job by ID

**Endpoint**: `/jobs/:id`

**Method**: `GET`

**Description**: Retrieves a job by its ID for the authenticated user.

**Headers**:
- `Authorization`: `Bearer your.jwt.token.here`

**Response**:
```json
{
  "id": "job-id",
  "title": "Job Title",
  "description": "Job Description",
  "status": "OPEN",
  "user": {
    "id": "user-id",
    "username": "testuser"
  }
}
```

**How to Test**:
1. Set the method to `GET` and the URL to `http://localhost:3000/jobs/job-id`.
2. Go to the `Headers` tab and add:
   - Key: `Authorization`
   - Value: `Bearer your.jwt.token.here`
3. Send the request.

### Create Job

**Endpoint**: `/jobs`

**Method**: `POST`

**Description**: Creates a new job for the authenticated user.

**Headers**:
- `Authorization`: `Bearer your.jwt.token.here`

**Request Body**:
```json
{
  "title": "Job Title",
  "description": "Job Description"
}
```

**Response**:
```json
{
  "id": "job-id",
  "title": "Job Title",
  "description": "Job Description",
  "status": "OPEN",
  "user": {
    "id": "user-id",
    "username": "testuser"
  }
}
```

**How to Test**:
1. Set the method to `POST` and the URL to `http://localhost:3000/jobs`.
2. Go to the `Headers` tab and add:
   - Key: `Authorization`
   - Value: `Bearer your.jwt.token.here`
3. Go to the `Body` tab, select `raw`, and set the type to `JSON`.
4. Enter the request body JSON and send the request.

## Messages

### Send Message

**Endpoint**: `/messages`

**Method**: `POST`

**Description**: Sends a message from the authenticated user to another user.

**Headers**:
- `Authorization`: `Bearer your.jwt.token.here`

**Request Body**:
```json
{
  "receiverId": "receiver-user-id",
  "content": "Hello, this is a test message!"
}
```

**Response**:
```json
{
  "id": "message-id",
  "sender": {
    "id": "sender-user-id",
    "username": "senderusername"
  },
  "receiver": {
    "id": "receiver-user-id",
    "username": "receiverusername"
  },
  "content": "Hello, this is a test message!",
  "timestamp": "2024-06-05T12:34:56.789Z"
}
```

**How to Test**:
1. Set the method to `POST` and the URL to `http://localhost:3000/messages`.
2. Go to the `Headers` tab and add:
   - Key: `Authorization`
   - Value: `Bearer your.jwt.token.here`
3. Go to the `Body` tab, select `raw`, and set the type to `JSON`.
4. Enter the request body JSON and send the request.

### Get Messages

**Endpoint**: `/messages`

**Method**: `GET`

**Description**: Retrieves messages for the authenticated user.

**Headers**:
- `Authorization`: `Bearer your.jwt.token.here`

**Response**:
```json
[
  {
    "id": "message-id",
    "sender": {
      "id": "sender-user-id",
      "username": "senderusername"
    },
    "receiver": {
      "id": "receiver-user-id",
      "username": "receiverusername"
    },
    "content": "Hello, this is a test message!",
    "timestamp": "2024-06-05T12:34:56.789Z"
  }
]
```

**How to Test**:
1. Set the method to `GET` and the URL to `http://localhost:3000/messages`.
2. Go to the `Headers` tab and add:
   - Key: `Authorization`
   - Value: `Bearer your.jwt.token.here`
3. Send the request.


Note: Please provides an overview of the available routes and how to test them using Postman. Ensure that you replace placeholder values like `your.jwt.token.here` and `job-id` with actual values from your application.
