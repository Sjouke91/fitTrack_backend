"use strict";
const data = require("../data/exercises.json");

const exerciseArray = data.map((e) => {
  return {
    name: e.exercise,
    muscleGroup: e.muscleGroup,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("exercises", exerciseArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
