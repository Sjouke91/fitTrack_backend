"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userToExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userToExercise.belongsTo(models.user);
      userToExercise.belongsTo(models.exercise);
    }
  }
  userToExercise.init(
    {
      userId: DataTypes.INTEGER,
      exerciseId: DataTypes.INTEGER,
      kg: { type: DataTypes.INTEGER, allowNull: false },
      sets: { type: DataTypes.INTEGER, allowNull: false },
      reps: { type: DataTypes.INTEGER, allowNull: false },
      RPE: { type: DataTypes.INTEGER, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
      sequelize,
      modelName: "userToExercise",
    }
  );
  return userToExercise;
};
