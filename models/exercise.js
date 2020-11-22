"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      exercise.belongsToMany(models.user, {
        through: "userToExercise",
        foreignKey: "exerciseId",
      });
      exercise.belongsToMany(models.workout, {
        through: "workoutToExercise",
        foreignKey: "exerciseId",
      });
      exercise.hasOne(model.muscleGroup);
    }
  }
  exercise.init(
    {
      name: DataTypes.STRING,
      muscleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "exercise",
    }
  );
  return exercise;
};
