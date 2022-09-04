import Doctor from "../models/Doctor";

async function createDoctor(req, res) {
  try {
    await Doctor.sync({
      force: false,
    });

    const doc = await Doctor.create({
      department: req.body.department,
      name: req.body.name,
      hospital: req.body.hospital,
    });
    res.json(doc);
  } catch (err) {
    res.json(err.message);
  }
}

async function getDoctors(req, res) {
  try {
    let { department } = req.query;
    let docs;
    if (!department) docs = await Doctor.findAll();
    else
      docs = await Doctor.findAll({
        where: { department },
      });
    res.json(docs);
  } catch (err) {
    res.json(err.message);
  }
}

export { createDoctor, getDoctors };
