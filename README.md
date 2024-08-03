# Blog-Website-API

## Overview

This project is a Node.js API that provides endpoints for managing users and blog posts. It uses Mongoose to connect to a MongoDB database and includes routes for CRUD operations on users and blogs.

## Features

- **User Management**: Create, read, update, and delete users.
- **Blog Management**: Create, read, update, and delete blog posts.
- **MongoDB Integration**: Connects to MongoDB using Mongoose with modern configuration options.

## Installation

1. **Clone the Repository**
2. **Navigate to the Project Directory**
3.  **Install Dependencies**  -> (npm intall)
4.  **Set Up Environment Variables**
Create a .env file in the root directory with the following content:


### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Have a MongoDB instance available. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB server.

- -
**API Endpoints***
  **User Routes**
*POST /api/user - Create a new user*
*GET /api/user/:id - Get user details by ID*
*PUT /api/user/:id - Update user details by ID*
*DELETE /api/user/:id - Delete user by ID*
**Blog Routes**
*POST /api/blog - Create a new blog post*
*GET /api/blog/:id - Get blog post details by ID*
*PUT /api/blog/:id - Update blog post details by ID*
*DELETE /api/blog/:id - Delete blog post by ID*
