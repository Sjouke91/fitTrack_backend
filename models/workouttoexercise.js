"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class workoutToExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      workoutToExercise.belongsTo(models.workout);
      workoutToExercise.belongsTo(models.exercise);
    }
  }
  workoutToExercise.init(
    {
      workoutId: DataTypes.INTEGER,
      exerciseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "workoutToExercise",
    }
  );
  return workoutToExercise;
};
