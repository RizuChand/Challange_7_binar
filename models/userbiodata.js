'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userBiodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userBiodata.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthplace: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userBiodata',
  });
  return userBiodata;
};