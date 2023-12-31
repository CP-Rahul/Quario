'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Answer, {
        foreignKey: 'questionId',
        onDelete: 'cascade',
      })
      this.belongsToMany(models.Topic, {
        through: 'questiontopics'
      })
    }
  }
  Question.init({
    description: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};