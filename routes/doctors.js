const express = require('express');
const router = express.Router();
const Doctors = require('../models/doctor')


// ● Get a list of all doctors
router.get('/', async (req, res) => {

  try {
    const doctors = await Doctors.find()
    res.json(doctors)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})


//Create doctor record
router.post('/', async (req, res) => {

  const doctor = new Doctors ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
  console.log(doctor)

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor)
  } catch (err) {
    res.status(500).json({message: err.message})
  }

})


// ● Delete an existing appointment from a doctor's calendar
// ● Add a new appointment to a doctor's calendar
// ○ New appointments can only start at 15 minute intervals (ie, 8:15AM is a valid time but 8:20AM is not)


module.exports = router;