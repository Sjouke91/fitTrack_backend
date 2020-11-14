"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userToWorkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userToWorkout.belongsTo(models.user);
      userToWorkout.belongsTo(models.workout);
    }
  }
  userToWorkout.init(
    {
      userId: DataTypes.INTEGER,
      workoutId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userToWorkout",
    }
  );
  return userToWorkout;
};
