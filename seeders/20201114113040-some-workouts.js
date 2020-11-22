"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "workouts",
      [
        {
          name: "Pull Workout",
          intensity: "Hard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Push Workout",
          intensity: "Easy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cardio Workout",
          intensity: "Hard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Outdoor workout",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Merels workout",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pull workout",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Push workout",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cardio workout",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("workouts", null, {});
  },
};
