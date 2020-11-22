"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "workoutToExercises",
      [
        {
          workoutId: 1,
          exerciseId: 103,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 862,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 532,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 188,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 1,
          exerciseId: 868,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 2,
          exerciseId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 2,
          exerciseId: 199,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 2,
          exerciseId: 369,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 2,
          exerciseId: 594,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 2,
          exerciseId: 253,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 3,
          exerciseId: 114,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 3,
          exerciseId: 639,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          workoutId: 3,
          exerciseId: 637,
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
