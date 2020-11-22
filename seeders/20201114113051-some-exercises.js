"use strict";
const exerciseArray = require("../data/dataModeling.js").exercises;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("exercises", exerciseArray, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
