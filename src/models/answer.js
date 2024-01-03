'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Question, {
        foreignKey: 'questionId',
        onDelete: 'cascade'
      }),
      this.hasMany(models.Comment, {
        foreignKey: 'answerId',
        onDelete: 'cascade'
      })
      this.hasMany(models.Like,{
        foreignKey: 'likableId',
        onDelete: 'cascade'
      })
    }
  }
  Answer.init({
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};