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
          name: "Lazy workout",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gym Time",
          intensity: "Medium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hard pumps",
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
