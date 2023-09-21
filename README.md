# README

## Start Database server
```
docker compose up -d app-db
```

## Initialise DB
```
bundle exec rails db:create db:migrate
```

## Run Tests
```
bundle exec rspec
```

