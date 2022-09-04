import express from "express";
import { createHospital, getHospitals } from "../controllers/hospital.js";
import { createPackage, getAllPackages } from "../controllers/package.js";

const router = express();

router.route("/").post(createHospitall).get(getHospitals);

export { router };
