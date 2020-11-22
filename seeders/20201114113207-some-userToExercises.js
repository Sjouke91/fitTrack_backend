"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userToExercises",
      [
        {
          userId: 1,
          exerciseId: 70,
          workoutId: 1,
          kg: 50,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          exerciseId: 119,
          workoutId: 1,
          kg: 50,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          exerciseId: 369,
          workoutId: 1,
          kg: 50,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          exerciseId: 594,
          workoutId: 1,
          kg: 50,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          exerciseId: 253,
          workoutId: 1,
          kg: 50,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userToExercises", null, {});
  },
};
