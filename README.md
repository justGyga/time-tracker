# About Project
It's my pet project. Its purpose is to show my knowledge of DDD architecture and also to develop a more convenient time tracker than Clockify, which I have been using until now. This part of the application is a server-side application for administering user records and setting time.

The architecture of the application is based on the following subject area:
There is a user who wants to track the time of his work. This requires the existence of several modules:
- User
- Workline



## Work with system

### File naming:
Use `kebab case` (words use low keys and separeted by `-`)

### scripts:
```sh
"lint": format all files in project
"build": build project
"start": run build
"start:dry": run build on local pc (for tests)
"local": run for local developing
"migrate:sql:make": create migration (with argument)
"migrate:sql:up": run migration
"migrate:sql:up:local": run migrations for local pc
"seed:sql:make": create seed (with argument)
"seed:sql:up": run seed
"seed:sql:up:local": run seed on local pc
```

### Create migration:
```sh
npx knex migrate:make -x ts --migrations-directory ./internal/db/sql/migrations _name_
```
or
```sh
npm run migrate:sql:make -- _name_
```

### Create seed (seeder):
Source files are executed in alphabetical order. Unlike migrations that are numbered by creation sequence.
```sh
npx knex seed:make -x ts --cwd ./internal/db/sql _name_
```
or
```sh
npm run seed:sql:make -- _name_
```