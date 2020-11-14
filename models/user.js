"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.workout, {
        through: "userToWorkout",
        foreignKey: "userId",
      });
      user.belongsToMany(models.exercise, {
        through: "userToExercise",
        foreignKey: "userId",
      });
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      heightInCm: DataTypes.INTEGER,
      weightInKg: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
