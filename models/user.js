"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helper/hash");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `username empty!`,
          },
          len: {
            args: [0, 20],
            message: `must greater than 5 and less than 20 character`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            message: `invalid email format`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: `password empty`,
          },
          len: {
            args: [6, 20],
            message: `must greater than 6 and less than 20 character`,
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance) {
          instance.password = hashPassword(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
