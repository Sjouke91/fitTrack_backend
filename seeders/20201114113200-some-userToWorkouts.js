"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userToWorkouts",
      [
        {
          userId: 1,
          workoutId: 1,
          workoutStart: "2020-11-23 16:52:17.238+00",
          createdAt: "2020-11-23 18:52:17.238+00",
          updatedAt: "2020-11-23 18:52:17.238+00",
        },
        {
          userId: 1,
          workoutId: 2,
          workoutStart: "2020-11-24 16:52:17.238+00",
          createdAt: "2020-11-24 18:52:17.238+00",
          updatedAt: "2020-11-24 18:52:17.238+00",
        },
        {
          userId: 1,
          workoutId: 3,
          workoutStart: "2020-11-25 16:52:17.238+00",
          createdAt: "2020-11-25 18:52:17.238+00",
          updatedAt: "2020-11-25 18:52:17.238+00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userToWorkouts", null, {});
  },
};
