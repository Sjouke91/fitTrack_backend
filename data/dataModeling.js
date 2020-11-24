const fromJson = require("./exercises");

const data = fromJson.map((e) => {
  const res = e.muscleGroup.slice(1);

  return { ...e, muscleGroup: res };
});

const allMusclesArray = data.map((e) => {
  return e.muscleGroup;
});

const muscleArray = [...new Set(allMusclesArray)];

const muscleGroupArray = muscleArray.map((e, i) => {
  return { name: e, id: i + 1, createdAt: new Date(), updatedAt: new Date() };
});

const exerciseArray = data.map((e) => {
  const muscle = muscleGroupArray.find((m) => m.name === e.muscleGroup);

  delete e.muscleGroup;
  return {
    ...e,
    muscleGroupId: muscle.id,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

const newArray = muscleGroupArray.map((m) => {
  delete m.id;
  return m;
});

// console.log(exerciseArray);

module.exports = { exercises: exerciseArray, muscles: muscleGroupArray };
