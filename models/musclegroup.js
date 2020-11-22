"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class muscleGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      itemTag.belongsMany(models.exercise);
    }
  }
  muscleGroup.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "muscleGroup",
    }
  );
  return muscleGroup;
};