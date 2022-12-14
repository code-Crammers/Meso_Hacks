import mongoose from "mongoose";
import sequelize from "../database/db.js";
import { Sequelize } from "sequelize-cockroachdb";

const User = sequelize.define("user", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.TEXT,
  },
  password: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

export default User;
