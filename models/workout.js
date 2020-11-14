"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      workout.belongsToMany(models.exercise, {
        through: "workoutToExercise",
        foreignKey: "workoutId",
      });
      workout.belongsToMany(models.user, {
        through: "userToWorkout",
        foreignKey: "workoutId",
      });
    }
  }
  workout.init(
    {
      name: DataTypes.STRING,
      intensity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "workout",
    }
  );
  return workout;
};
