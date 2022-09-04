import sequelize from "../database/db.js";
import { Sequelize } from "sequelize-cockroachdb";

const Doctor = sequelize.define("doctor", {
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
  hospital: {
    type: Sequelize.TEXT,
  },
  image: {
    type: String,
    defaultValue:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

export default Doctor;
