import express from "express";
import { createDoctor, getDoctors } from "../controllers/doctor.js";
import { createPackage, getAllPackages } from "../controllers/package.js";

const router = express();

router.route("/").post(createDoctor).get(getDoctors);

export { router };
