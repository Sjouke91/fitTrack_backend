"use strict";
const muscleGroupArray = require("../data/dataModeling.js").muscles;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("muscleGroups", muscleGroupArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("muscleGroups", null, {});
  },
};
