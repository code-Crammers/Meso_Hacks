import sequelize from "../database/db.js";
import { Sequelize } from "sequelize-cockroachdb";

const Hospital = sequelize.define("hospital", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.TEXT,
  },
  speciality: {
    type: Sequelize.TEXT,
  },
  baseAmount: {
    type: Sequelize.INTEGER,
  },
  image: {
    type: String,
    defaultValue:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

export default Hospital;
