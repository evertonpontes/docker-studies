# Portfolio with NGINX

A simple static portfolio website created as a **Docker learning project**.

The main goal of this project is to practice containerizing a static website and serving it using **NGINX** with the lightweight `nginx:alpine` Docker image.

## 🎯 Purpose

This project was created to study the basics of Docker by:

- Creating a Docker image from a `Dockerfile`
- Using an official Docker image as a base
- Serving static files with NGINX
- Copying application files into a container
- Exposing a container port
- Running a static website inside a Docker container

The portfolio itself is intentionally simple. The focus of the project is the Docker setup rather than building a complex frontend application.

## 🛠️ Technologies

- HTML5
- CSS3
- Docker
- NGINX
- Alpine Linux

## 📁 Project Structure

```text
portfolio-with-nginx/
├── web/
│   ├── index.html
│   ├── styles.css
│   └── portfolio-image.png
│
└── Dockerfile
```

### `web/`

Contains the static files used by the portfolio:

- `index.html` — the main HTML document containing the portfolio sections.
- `styles.css` — styles and responsive layout for the website.
- `portfolio-image.png` — image used in the About section.

The portfolio includes:

- About section
- Projects section
- Contact form
- GitHub and LinkedIn links

## 🐳 Dockerfile

The Dockerfile uses the official `nginx:alpine` image as its base:

```dockerfile
FROM nginx:alpine

COPY /web /usr/share/nginx/html

EXPOSE 80
```

### How it works

#### 1. Base image

```dockerfile
FROM nginx:alpine
```

Uses the lightweight Alpine-based NGINX image as the foundation of the container.

NGINX is responsible for serving the static HTML, CSS, and image files.

#### 2. Copy the website

```dockerfile
COPY /web /usr/share/nginx/html
```

Copies the contents of the `web` directory into NGINX's default document root.

This allows NGINX to serve `index.html` and the other static assets when the container receives an HTTP request.

#### 3. Expose port 80

```dockerfile
EXPOSE 80
```

Documents that the application inside the container listens on port `80`, which is the default HTTP port used by NGINX.

## 🚀 Running the Project

### Prerequisites

Make sure you have Docker installed and running on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/evertonpontes/docker-studies.git
```

### 2. Navigate to the project

```bash
cd docker-studies/portfolio-with-nginx
```

### 3. Build the Docker image

```bash
docker build -t portfolio-nginx .
```

This command uses the `Dockerfile` in the current directory to build a Docker image named `portfolio-nginx`.

### 4. Run the container

```bash
docker run -d -p 8080:80 --name portfolio-nginx portfolio-nginx
```

The `-p 8080:80` option maps:

```text
Host       → Container
8080       → 80
```

### 5. Open the portfolio

Open your browser and visit:

```text
http://localhost:8080
```

The static portfolio should now be served by NGINX from inside the Docker container.

## 🛑 Stopping the Container

To stop the running container:

```bash
docker stop portfolio-nginx
```

To remove the container:

```bash
docker rm portfolio-nginx
```

## 🗑️ Removing the Image

If you also want to remove the Docker image:

```bash
docker rmi portfolio-nginx
```

## 🔍 Useful Docker Commands

List running containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

List available images:

```bash
docker images
```

View the container logs:

```bash
docker logs portfolio-nginx
```

Open a shell inside the container:

```bash
docker exec -it portfolio-nginx sh
```

## 📚 What I Learned

This project was built to reinforce the following Docker concepts:

- Docker images and containers
- Dockerfiles
- Base images
- The `FROM` instruction
- The `COPY` instruction
- The `EXPOSE` instruction
- Port mapping with `docker run -p`
- Running NGINX inside a container
- Serving static files from a Docker container
- Using Alpine-based images to keep containers lightweight

## 🚧 Project Scope

This is intentionally a small and simple project.

The portfolio is a **static website**, so there is no backend, database, JavaScript application, or API involved. The contact form is part of the static interface and does not implement a backend for sending messages.

The purpose of the project is primarily to understand how a static website can be packaged into a Docker image and served by NGINX.

## 📌 Future Improvements

Possible improvements for further Docker practice:

- Add a `.dockerignore` file
- Configure a custom NGINX configuration
- Add Docker Compose
- Add HTTPS support
- Add a CI/CD workflow
- Publish the Docker image to a container registry
- Deploy the container to a cloud server

---

**Part of my Docker studies repository:**
https://github.com/evertonpontes/docker-studies
