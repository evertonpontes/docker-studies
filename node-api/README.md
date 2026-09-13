# Node API with Docker

A simple REST API built with **Node.js and Express** as a Docker study project.

The main goal of this project is to practice containerizing a Node.js application using a **multi-stage Dockerfile**, while also working with REST API routes and testing HTTP requests using the **REST Client extension for VS Code**.

## 🛠️ Technologies

- Node.js
- Express
- Docker
- Alpine Linux
- REST Client for VS Code

## 📁 Project Structure

```text
node-api/
├── src/
│   ├── db/
│   │   └── fake-data.json
│   ├── routes/
│   │   └── users.js
│   └── index.js
├── Dockerfile
└── package.json
```

The API uses `fake-data.json` as a simple data store and provides CRUD operations through the `/users` route.

## 📡 API Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/users`     | Get all users    |
| GET    | `/users/:id` | Get a user by ID |
| POST   | `/users`     | Create a user    |
| PUT    | `/users/:id` | Update a user    |
| DELETE | `/users/:id` | Delete a user    |

## 🐳 Docker

The application uses a **multi-stage Docker build**:

- A build stage installs production dependencies.
- A runtime stage copies the required dependencies and application files.
- The application runs on port `3000`.
- The container starts the API using `npm run start`.

Build the image:

```bash
docker build -t node-api .
```

Run the container:

```bash
docker run -p 3000:3000 node-api
```

The API will be available at:

```text
http://localhost:3000
```

## 🧪 Testing Requests

HTTP requests were tested using the **REST Client** extension for Visual Studio Code.

This makes it possible to send requests directly from `.http` files and inspect the API responses without using an external API client.

## 📚 What I Learned

This project was created to practice:

- Building a REST API with Express
- Implementing CRUD operations
- Handling JSON request bodies
- Using environment variables in Docker
- Creating multi-stage Docker images
- Using Alpine-based Node.js images
- Mapping container ports
- Testing REST endpoints with VS Code REST Client

## 📌 Status

**Completed — Docker study project**
