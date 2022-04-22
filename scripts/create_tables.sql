CREATE SCHEMA IF NOT EXISTS task_manager;

CREATE TABLE IF NOT EXISTS task_manager.task (
   id SERIAL PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS task_manager.task_group (
   id SERIAL PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS task_manager.task_group_task (
  task_group_id INT,
  task_id INT,
  PRIMARY KEY (task_group_id, task_id),
  CONSTRAINT fk_task_group FOREIGN KEY(task_group_id) REFERENCES task_manager.task_group(id),
  CONSTRAINT fk_task FOREIGN KEY(task_id) REFERENCES task_manager.task(id)
);
