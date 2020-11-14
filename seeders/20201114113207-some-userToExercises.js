"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userToExercises",
      [
        {
          userId: 1,
          exerciseId: 2,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          exerciseId: 4,
          sets: 5,
          reps: 8,
          RPE: 7,
          date: "2020-11-8",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          exerciseId: 5,
          sets: 5,
          reps: 7,
          RPE: 6,
          date: "2020-11-5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          exerciseId: 4,
          sets: 4,
          reps: 10,
          RPE: 9,
          date: "2020-11-5",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          exerciseId: 3,
          sets: 4,
          reps: 10,
          RPE: 8,
          date: "2020-11-2",
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
