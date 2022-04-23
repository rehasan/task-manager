# task-manager

We need to develop a feature for users to create tasks and task lists. Tasks can then be added to different task lists.
1. Design a db schema for the relevant entities.
2. Develop a Rest API with CRUD endpoints for tasks and task lists as well as endpoints to add/remove a task to/from a task list.

Requirements:
- Use Postgres or MySQL.
- For simplicity, a file with DDL scripts is enough to create the db schema.
- Tasks and task lists must have at least “title” and “updatedAt” columns.
- The same task can be added to multiple task lists.
- Implement the app with TypeScript.
- Write tests for at least 2 endpoints using Jest or Mocha.
- Add instructions to run the application.

Bonus:
- Docker config to start up DB.
- Preferably do not use any ORM framework.
- API implemented as Lambda functions using Serverless framework.

Notes:
- Keep it simple.
- Do not spend more than 2/3 hours.
- This task should give us a sense of your coding style and an insight into how you would structure a Nodejs app.
- Submit your code in a public git repository (preferred) or in a zip file via email.

## PRE-REQUISITES

- Requires NodeJs `14.16.0` or higher
- Requires docker-compose https://docs.docker.com/compose/install/

## Clone the repository

    git clone https://github.com/rehasan/task-manager.git

## Install

    npm install

## Build

    npm run build
  
## Tests

    npm run test

## Run with docker-compose

Postgres and API services will be building and executing with the following commands,

### Build the services

    docker compose -f docker/docker-compose.yml build

### Run the services

    docker compose -f docker/docker-compose.yml up -d

### Shutdown the services

    docker compose -f docker/docker-compose.yml down

## API Outlines

The following table shows overview of the Rest APIs that will be exported,

- GET     `api/tasks`	            get all the tasks
- GET     `api/tasks/:id`           get a task by id
- POST    `api/tasks/`              create a task
- PUT     `api/tasks/:id`           update a task
- DELETE  `api/tasks/:id`           delete a task

- GET     `api/task-groups`	        get all the task groups
- GET     `api/task-groups/:id`     get a task group by id
- POST    `api/task-groups/`        create a task group
- PUT     `api/task-groups/:id`     update a task group
- DELETE  `api/task-groups/:id`     delete a task group