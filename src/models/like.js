'use strict';
const {
  Model
} = require('sequelize');

const { Enums} = require('../utills/common');
const { ANSWER, COMMENT } = Enums.LikeType;

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    likableType: {
      type: DataTypes.ENUM,
      values: [ANSWER, COMMENT],
      allowNull: false
    },
    likableId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};