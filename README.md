## Endpoints

| Method | Path                       | Purpose                             | required parameters   | auth |
| ------ | -------------------------- | ----------------------------------- | --------------------- | ---- |
| GET    | '/'                        | Test if your server is running      | none                  | no   |
| POST   | '/echo'                    | Test POST requests                  | none                  | no   |
| POST   | '/signup'                  | Create a new user and get a token   | email, name, password | no   |
| POST   | '/login'                   | Get a token with email & password   | email, password       | no   |
| GET    | '/me'                      | Get information of this user        | none                  | yes  |
| POST   | '/authorized_post_request' | Test POST requests (token required) | none                  | yes  |

**Endpoint plan**
| Method | Path | Purpose | required parameters | auth |
| ------ | -------------------------- | -------------------------------------- | --------------------- | ---- |
| GET | '/exercises' | Get all exercises | none | no |
| GET | '/exercises/:id' | Get one exercise by i | none | no |
| GET | '/exercises/search' | Get one exercise by name or mg | exercise name | no |
| POST | '/exercises' | Create new exercise | name, muscleId | yes |
| GET | '/workouts' | Get all exercises | none | no |
| GET | '/exercises/:id' | Get one exercise by id | exerciseId | no |
| GET | '/:userId/workouts' | Get all exercises of user | none | no |
| GET | '/:userId/exercises' | Get all exercise by i | userId | no |
| GET | '/:userId/workouts/:id' | Get one workout of user | userId, workoutId | no |
| GET | '/:userId/exercises/:exId' | Get all exercise logs of 1 ex. of user | userId, exerId | no |
| POST | '/:userId/exercises/:exId' | Create new ex. log | userId, exerID | no |
