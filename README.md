# Hi there, thank you for visiting my FITTRACK project!

## What this app is about

This app is made for all the powerlifters, crossfitters and fitness addicts out there who want to track their progress. The app can be used to create and log your workouts and exercises. Compose a new workout with the 900+ exercises stored in the backend. Workout Done? Check the dashboard functionality and track your progress in easy to read graphs and tables.

So what are you waiting for? create your own account on [Fittrack](https://fittrack.netlify.app/workouts)!

This project is made during the Codaisseur code academy portfolio assessment weeks. In a timeframe of two weeks I've made both the client and a server.

Check the [Front End](https://github.com/Sjouke91/Fittrack_frontend_tc) repository for more information

**Available endpoints**

| Method | Path                       | Purpose                                | required parameters   | auth |
| ------ | -------------------------- | -------------------------------------- | --------------------- | ---- |
| GET    | '/'                        | Test if your server is running         | none                  | no   |
| POST   | '/echo'                    | Test POST requests                     | none                  | no   |
| POST   | '/signup'                  | Create a new user and get a token      | email, name, password | no   |
| POST   | '/login'                   | Get a token with email & password      | email, password       | no   |
| GET    | '/me'                      | Get information of this user           | none                  | yes  |
| GET    | '/exercises'               | Get all exercises                      | none                  | no   |
| GET    | '/exercises/:id'           | Get one exercise by id                 | none                  | no   |
| GET    | '/exercises/search'        | Get one exercise by name or mg         | exercise name         | no   |
| POST   | '/exercises'               | Create new exercise                    | name, muscleId        | yes  |
| GET    | '/workouts'                | Get all exercises                      | none                  | no   |
| GET    | '/exercises/:id'           | Get one exercise by id                 | exerciseId            | no   |
| GET    | '/:userId/workouts'        | Get all exercises of user              | none                  | no   |
| GET    | '/:userId/exercises'       | Get all exercise by i                  | userId                | no   |
| GET    | '/:userId/workouts/:id'    | Get one workout of user                | userId, workoutId     | no   |
| GET    | '/:userId/exercises/:exId' | Get all exercise logs of 1 ex. of user | userId, exerId        | no   |
| POST   | '/:userId/exercises/:exId' | Create new ex. log                     | userId, exerID        | no   |
