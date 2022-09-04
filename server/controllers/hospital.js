import Hospital from "../models/Hospital";

async function createHospital(req, res) {
  try {
    await Hospital.sync({
      force: false,
    });

    const doc = await Hospital.create({
      location: req.body.location,
      name: req.body.name,
      location: req.body.location,
      speciality: req.body.speciality,
      baseAmount: req.body.baseAmount,
    });
    res.json(doc);
  } catch (err) {
    res.json(err.message);
  }
}

async function getHospitals(req, res) {
  try {
    let { department } = req.query;
    let docs;
    if (!department) docs = await Hospital.findAll();
    else
      docs = await Hospital.findAll({
        where: { department },
      });
    res.json(docs);
  } catch (err) {
    res.json(err.message);
  }
}

export { createHospital, getHospitals };
