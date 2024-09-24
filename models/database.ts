import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  host: "./db.db",
  logging: false,
});

export default sequelize;
