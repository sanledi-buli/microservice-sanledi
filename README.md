# microservice-sanledi

Simple microservice for CRUD operation.

## How do I get set up?

###### Dependencies

1. MongoDB

###### Getting started

```shell
$ git clone
$ cd microservice-sanledi
$ rm package-lock.json
$ npm install
```

###### Setup environment variables

```shell
$ cp .env.example .env
```

Setup `.env` base on your local machine

###### Start server

```shell
$ npm start
```

## Runtime Environment variables

Configure the service with the following variables:

| Environment Variable | Default        | Usage                                                    |
| -------------------- | -------------- | -------------------------------------------------------- |
| `LOG_LEVEL`          | `info`         | Logger level.                                            |
| `NODE_ENV`           | `development`  | Running environment.                                     |
| `TZ`                 | `Asia/Jakarta` | Time Zone using GMT+7.                                   |
| `SERVICE_PORT`       | `3000`         | Port to expose the service on. Shouldn't need to change. |
| `SERVICE_HOST`       | `0.0.0.0`      | Service host.                                            |
| `MONGO_HOST`         | `localhost`    | MongoDB host.                                            |
| `MONGO_USER`         | `sanledi_db`   | MongoDB user.                                            |
| `MONGO_PASSWORD`     | `sanledi_db`   | MongoDB password.                                        |
| `MONGO_PORT`         | `27017`        | MongoDB port.                                            |
| `MONGO_DB`           | `sanledi_db`   | MongoDB database.                                        |

## Commands

| Command      | Usage                                      |
| ------------ | ------------------------------------------ |
| `make build` | Will build and tag docker image            |
| `make run`   | Will run docker image with --env-file .env |
