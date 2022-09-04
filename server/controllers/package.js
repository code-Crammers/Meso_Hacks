import Package from "../models/Package.js";
import User from "../models/User.js";

async function createPackage(req, res) {
  try {
    await Package.sync({
      force: false,
    });

    const packageData = await Package.create({
      department: req.body.department,
      name: req.body.name,
      baseAmount: req.body.baseAmount,
    });
    res.json(packageData);
  } catch (err) {
    res.json(err.message);
  }
}

async function getAllPackages(req, res) {
  try {
    let { department } = req.query;
    let packages;
    console.log(department);
    if (!department) packages = await Package.findAll();
    else
      packages = await Package.findAll({
        where: { department },
      });
    res.json(packages);
  } catch (err) {
    res.json(Err.message);
  }
}

export { createPackage, getAllPackages };
