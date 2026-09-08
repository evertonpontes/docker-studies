# Basic Dockerfile

A basic dockerfile that create an image. When the docker image is run, it print "Hello, Captain!" to the console before exiting.

## Requirements

- This project have a file named `Dockerfile`.
- The Dockerfile can be founded in the root of the project.
- This project use image `alpine:latest`.
- The Dockerfile have a default instruction to print "Hello, Captain!" to the console before exiting.

## Challenge

This project was developed based on the following roadmap.sh challenge:

- [Basic Dockerfile — roadmap.sh](https://roadmap.sh/projects/basic-dockerfile)

## Running the application

### Requirements

- Docker Desktop installed
- Windows, Linux or macOS

> **IMPORTANT**.: Follow the guides on [Docker Website](https://docs.docker.com/get-started/get-docker/) to have **Docker Desktop** installed in your system.

### Build

Clone the repository and go to the folder `/basic-dockerfile`. As in the example above:

```bash
git clone https://github.com/evertonpontes/docker-studies.git

cd /basic-dockerfile
```

Execute the following command to build the Docker image:

```bash
docker build -t hello-captain .
```

To run the container execute the command bellow

```bash
docker run --rm hello-captain
```

**Result:**

```bash
Hello, Captain!
```

## Update

You can change the message to print "Hello, **_<your_name>_**!" instead of "Hello, Captain" by setting an environment variable with `-e` when execute `docker run`.

```bash
docker build -t hello-captain .

docker run --rm -e NAME=YourName hello-captain
```
