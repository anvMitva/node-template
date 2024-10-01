import { Sequelize } from "sequelize";
import { DB_NAME } from "../constant.js";

const sequelize = new Sequelize(
  DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mssql",
  }
);

export { sequelize };
