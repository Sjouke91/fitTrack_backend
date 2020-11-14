"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "workouts",
      [
        {
          name: "Hendriks workout",
          intensity: "Hard",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Workout of the day",
          intensity: "Easy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "November workout",
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
