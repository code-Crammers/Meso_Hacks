import { Sequelize } from "sequelize-cockroachdb";

import "dotenv/config";
const sequelize = new Sequelize(process.env.COCKROACH_URI, {
  dialectOptions: {
    application_name: "test",
  },
});

export default sequelize;
