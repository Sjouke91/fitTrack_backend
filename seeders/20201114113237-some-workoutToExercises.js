"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "workoutToExercises",
      [
        {
          workoutId: 1,
          exerciseId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 2,
          exerciseId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 3,
          exerciseId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 4,
          exerciseId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 6,
          exerciseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("workoutToExercises", null, {});
  },
};
