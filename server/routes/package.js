import express from "express";
import { createPackage, getAllPackages } from "../controllers/package.js";

const router = express();

router.route("/").post(createPackage).get(getAllPackages);

export { router };
