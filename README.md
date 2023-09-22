# README

## Start Database server

Starts a Postgres Database server in docker container. The DB is configured to run on port 5430. (See docker-compose.yml)

```
docker compose up -d app-db
```

## Initialise DB

For first run only, creates the database tables

```
bundle exec rails db:create
```

## Run Tests

Run the entire application's test suite

```
bundle exec rspec
```

## Start both rails server and webpack dev server

Starts rails server and the webpack server in parallel.

```
yarn dev
```

## Start rails server

Starts rails server, runs on port 3001

```
bundle exec rails s -p 3001
```

## Start webpack dev server

Shakapacker will automatically start proxying all webpack asset requests to this server.

```
./bin/shakapacker-dev-server
```
