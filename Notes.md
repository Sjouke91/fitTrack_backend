## Migrates

## Seeds

npx sequelize-cli seed:generate --name some-workouts
npx sequelize-cli seed:generate --name some-exercises
npx sequelize-cli seed:generate --name some-userToWorkouts
npx sequelize-cli seed:generate --name some-userToExercises
npx sequelize-cli seed:generate --name some-workoutToExercises

http -v POST :4001/exercises/5 reps=9 sets=5 weight=8 RPE=5 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYwNTQzMDEyMCwiZXhwIjoxNjA1NDM3MzIwfQ.zf7gnYSO4XtrbjlIPYS3rKBGRImLONhRKqMncP7N_us"

http -v :4001/exercises/3 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYwNTQzNzgwNCwiZXhwIjoxNjA1NDQ1MDA0fQ.3_T6jhbwt1fKuUxDrtr7X9LvCvXP6CRflGvCsmzVcrg"
