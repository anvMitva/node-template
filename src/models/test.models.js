import { DataTypes } from "sequelize";
import { sequelize } from "../utils/dbConnection.js";

const test = sequelize.define(
  "test",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [10, 15], 
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    departmentName: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true, 
    tableName: "tbl_test", 
  }
);

export default test;
