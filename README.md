# task-manager

Develop a feature for users to create tasks and task lists. Tasks can then be added to different task lists.

## PRE-REQUISITES

- Requires NodeJs `14.16.0` or higher
- Requires docker compose https://docs.docker.com/compose/install/

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

Now, you should be able to explore the API locally from http://localhost:3000.

The following table shows overview of the Rest APIs that will be accessible,

| Method    | End Point                           | Note
| --------- | ----------------------------------- | ----------------------------------- |      
| `GET`     | `api/tasks`	                      | get all the tasks                   |
| `GET`     | `api/tasks/:id`                     | get a task by id                    |
| `GET`     | `api/tasks/:id/task-groups`	      | get all the task groups by task     |
| `POST`    | `api/tasks/`                        | create a task                       |
| `PUT`     | `api/tasks/:id`                     | update a task                       |
| `DELETE`  | `api/tasks/:id`                     | delete a task                       |
| `GET`     | `api/task-groups`	                  | get all the task groups             |
| `GET`     | `api/task-groups/:id`               | get a task group by id              |
| `GET`     | `api/task-groups/:id/tasks`	      | get all the tasks by task group     |
| `POST`    | `api/task-groups/`                  | create a task group                 |
| `PUT`     | `api/task-groups/:id`               | update a task group                 |
| `DELETE`  | `api/task-groups/:id`               | delete a task group                 |
| `PUT`     | `api/task-groups/:id/tasks/:taskId` | add a task to a task group          |
| `DELETE`  | `api/task-groups/:id/tasks/:taskId` | remove a task from a task group     |

Additionally, import [postman collection with it's env](./.postman) to explore the API endpoints. Please remember to select `task-manager.postman_collection.json` env variable while executing the API endpoints file from Postman.
