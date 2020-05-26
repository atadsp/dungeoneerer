# Dungeoneerer
A D&amp;D 3.5 and Pathfinder 1 resource

## Environment Variables

* PORT
* PGUSER
* PGHOST
* PGPASSWORD
* PGDATABASE
* PGPORT

## Setup

### Deploying the App
1. Ensure node version manager and git are installed
2. ```git clone```
3. ```nvm install```
4. ```nvm use```
5. ```npm install```
6. fill in .env file in the root directory

### Deploying the Database 
1. Download and install postgres
2. Download and install liquibase
3. cd into the psql directory 
4. setup your `liquibase.properties` file in the psql directory
5. ```liquibase update```

## Launch
```npm start```


# Dependancies 
git: https://git-scm.com/
node version manager: https://github.com/nvm-sh/nvm#installing-and-updating
node (version 14.3.0): https://nodejs.org/en/
postgres (version 12.3.0): https://www.postgresql.org/
liquibase (version 4.0.0-beta1): https://www.liquibase.org/