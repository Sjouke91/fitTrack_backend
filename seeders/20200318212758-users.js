"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Hendrik Hoekstra",
          email: "h@h.com",
          password: bcrypt.hashSync("test1", 10),
          gender: "male",
          age: 29,
          heightInCm: 178,
          weightInKg: 81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sjouke Veenstra",
          email: "s@v.com",
          password: bcrypt.hashSync("test2", 10),
          gender: "male",
          age: 32,
          heightInCm: 185,
          weightInKg: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sjouke Bosma",
          email: "s@b.com",
          password: bcrypt.hashSync("test3", 10),
          gender: "male",
          age: 28,
          heightInCm: 179,
          weightInKg: 76,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jurriaan Bastinck",
          email: "j@b.com",
          password: bcrypt.hashSync("test4", 10),
          gender: "male",
          age: 27,
          heightInCm: 178,
          weightInKg: 73,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Merel Sluiter",
          email: "m@s.com",
          password: bcrypt.hashSync("test5", 10),
          gender: "female",
          age: 31,
          heightInCm: 158,
          weightInKg: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
