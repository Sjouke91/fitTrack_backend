## Migrates

## Seeds

npx sequelize-cli seed:generate --name some-workouts
npx sequelize-cli seed:generate --name some-exercises
npx sequelize-cli seed:generate --name some-userToWorkouts
npx sequelize-cli seed:generate --name some-userToExercises
npx sequelize-cli seed:generate --name some-workoutToExercises

http -v POST :4001/exercises/5 reps=9 sets=5 weight=8 RPE=5 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYwNTQzMDEyMCwiZXhwIjoxNjA1NDM3MzIwfQ.zf7gnYSO4XtrbjlIPYS3rKBGRImLONhRKqMncP7N_us"

http -v :4001/exercises/3 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTYwNTQzNzgwNCwiZXhwIjoxNjA1NDQ1MDA0fQ.3_T6jhbwt1fKuUxDrtr7X9LvCvXP6CRflGvCsmzVcrg"

"use strict";
const exercises = "./exercises.csv";
const csv = require("csvtojson");

csv()
.fromFile(exercises)
.then((jsonObj) => {
console.log(jsonObj);
});

module.exports = {
up: async (queryInterface, Sequelize) => {
const jsonArray = await csv().fromFile(exercises);
if (jsonArray) {
const exerciseArray = jsonArray.map((e) => {
return {
name: e.exercise,
muscleGroup: e.muscleGroup,
createdAt: new Date(),
updatedAt: new Date(),
};
});

    }
    await queryInterface.bulkInsert("exercises", exerciseArray, {});

},

down: async (queryInterface, Sequelize) => {
await queryInterface.bulkDelete("exercises", null, {});
},
};

OLD:
"use strict";

module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.bulkInsert(
"exercises",
[
{
name: "Bench Press",
muscleGroup: "Chest",
createdAt: new Date(),
updatedAt: new Date(),
},
{
name: "Pull up",
muscleGroup: "Traps",
createdAt: new Date(),
updatedAt: new Date(),
},
{
name: "Shoulder press",
muscleGroup: "Shoulders",
createdAt: new Date(),
updatedAt: new Date(),
},
{
name: "Squat",
muscleGroup: "Legs",
createdAt: new Date(),
updatedAt: new Date(),
},
{
name: "Bicep curl",
muscleGroup: "Biceps",
createdAt: new Date(),
updatedAt: new Date(),
},
],
{}
);
},

down: async (queryInterface, Sequelize) => {
await queryInterface.bulkDelete("exercises", null, {});
},
};

http -v :4001/exercises Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwNjM5OTE5MiwiZXhwIjoxNjA2NDA2MzkyfQ.5lxhVrEFHFunjQ56sXnDwjkAGT_WESj54MDqlM0EfQU"

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Weight</th>
      <th>Sets</th>
      <th>Reps</th>
      <th>RPE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
