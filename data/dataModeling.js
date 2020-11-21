const data = require("./exercises");

const allMusclesArray = data.map((e) => {
  return e.muscleGroup;
});

const muscleGroupArray = [...new Set(allMusclesArray)];

const indexArray = muscleGroupArray.map((e, i) => {
  return { exercise: e, Id: i + 1 };
});

console.log(indexArray);

// const exerciseArray = data.map((e) => {});
