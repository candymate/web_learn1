# SQL Tables

## Users

| attr\cols | id             | userID      | password_hash | trainID | roomID  | createdAt | updatedAt |
| --------- | -------------- | ----------- | ------------- | ------- | ------- | --------- | --------- |
| type      | integer        | varchar(32) | varchar(64)   | integer | integer | date      | date      |
| PK        | o              |             |               |         |         |           |           |
| UK        |                | o           |               |         |         |           |           |
| NOT NULL  | o              | o           | o             |         |         | o         | o         |
| CHECK     |                |             |               |         |         |           |           |
| FK        |                |             |               |         |         |           |           |
| etc       | auto_increment |             |               |         |         |           |           |

## TrainTimetable

| attr\cols | id             | trainType  | trainNo | dep        | depTime | arr        | arrTime | createdAt | updatedAt |
| --------- | -------------- | ---------- | ------- | ---------- | ------- | ---------- | ------- | --------- | --------- |
| type      | integer        | varchar(8) | integer | varchar(8) | date    | varchar(8) | date    | date      | date      |
| PK        | o              |            |         |            |         |            |         |           |           |
| UK        |                |            |         |            |         |            |         |           |           |
| NOT NULL  | o              | o          | o       | o          | o       | o          | o       | o         | o         |
| CHECK     |                |            |         |            |         |            |         |           |           |
| FK        |                |            |         |            |         |            |         |           |           |
| etc       | auto_increment |            |         |            |         |            |         |           |           |

## CarpoolRoom

| attr\cols | id             | time | createdAt | updatedAt |
| --------- | -------------- | ---- | --------- | --------- |
| type      | integer        | date | date      | date      |
| PK        | o              |      |           |           |
| UK        |                |      |           |           |
| NOT NULL  | o              | o    | o         | o         |
| CHECK     |                |      |           |           |
| FK        |                |      |           |           |
| etc       | auto_increment |      |           |           |

