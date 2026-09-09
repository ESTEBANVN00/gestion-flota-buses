import dotenv from 'dotenv';
dotenv.config();

const DB_NAME = process.env.DB_NAME || "gestion_flota_buses";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";

const OBJ_SEQUELIZE = {
  port: parseInt(process.env.DB_PORT) || 3306,
  dialect: process.env.DB_DIALECT || "mysql",
  host: process.env.DB_HOST || "localhost",
  logging: false
};

export {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  OBJ_SEQUELIZE
};