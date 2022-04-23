# task-manager

Develop a feature for users to create tasks and task lists. Tasks can then be added to different task lists.
2. Develop a Rest API with CRUD endpoints for tasks and task lists as well as endpoints to add/remove a task to/from a task list.

Requirements:
- The same task can be added to multiple task lists.

Bonus:
- API implemented as Lambda functions using Serverless framework.

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