import sequelize from "../database/db.js";
import { Sequelize } from "sequelize-cockroachdb";
import Doctor from "./Doctor.js";
const Package = sequelize.define("package", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  department: {
    type: Sequelize.TEXT,
  },
  name: {
    type: Sequelize.TEXT,
  },
  baseAmount: {
    type: Sequelize.INTEGER,
  },
});

export default Package;
