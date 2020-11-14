"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "exercises",
      [
        {
          name: "Bench Press",
          type: "Push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pull up",
          type: "Pull",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shoulder press",
          type: "Push",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Squat",
          type: "Legs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bicep curl",
          type: "Arms",
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
