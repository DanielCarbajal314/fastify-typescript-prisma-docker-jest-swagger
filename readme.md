# Fastify Typescript Postgresql Example
## An example backend application containerized with test

This is an example application of an API build with NodeJs, Typescript and Fastify

## Features
- Prisma ORM with Migrations and Data Seeding
- Docker Compose with the Database and API Server, it also runs the migrations and data seeding
- Unit Test with Jest
- Typescript with prettier configuration
- Swagger UI Setup on base path
- Fastify Middleware to handle Exceptions
- Pino Logging with formatter
- Modular Code Distribution
- Scripts to Build, start, run development enviroment, format with prettier, ORM operations and run Unit Test

## Installation

Requires [Node.js](https://nodejs.org/) v14.20+, Docker and Docker-Compose.

Install the dependencies and devDependencies and start the server.

```sh
docker compose up
```

The App Runs on **http://localhost:3050** by default
The postgresql connection url is: **postgresql://postgres:postgres@localhost:5432/backend**