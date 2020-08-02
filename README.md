# Legal Aid Clinic

## Please check the node version on your local machine and ensure you are using - 

```
node --version
v10.16.3
```

* Use `npm start` to run app
* Use `nodemon server.js` to run server (on port 8000 - Express JS)

Remember to run npm install after you git pull, this should stop issues with package-lock.json conflicts

## User Stories

### MVP

## As a user:

* I need to be able to register for an account
* I need to be able to login to my account

### Stretch

TODO
---

## Views (Client Side)

| name          | purpose                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Login         | View for user to enter their login credentials                                                                           |
| Register      | View for user to sign up for the App                                                                                     |


## Reducers (Client Side)
TODO -- or use Context with React Hooks (same idea with reducers, these will be react reducers)
| name           | purpose                                                              |
| -------------- | -------------------------------------------------------------------- |
| auth           | Store information regarding user logins, auth status and auth errors |


## Actions
TODO

### users

| type          | data  | purpose                            |
| ------------- | ----- | ---------------------------------- |
| RECEIVE_USERS | users | retreive the users from the server |


## API (Client - Server)

| Method | Endpoint                | Protected | Usage                          | Response                                          |
| ------ | ----------------------- | --------- | ------------------------------ | ------------------------------------------------- |
| Post   | /api/auth/login         | Yes       | Log In a User                  | The Users JWT Token                               |
| Post   | /api/auth/register      | Yes       | Register a User                | The Users JWT Objects                          |

## DB (Server Side)

TODO

### Users

| Column Name | Data Type |
| ----------- | --------- |
| id          | Integer   |
| user_name   | String    |
| first_name  | String    |
| last_name   | String    |
| hash        | text      |




---

### Wireframe
* View here: https://balsamiq.cloud/s77mqz5/p44vnid/rA778
