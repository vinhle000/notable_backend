const express = require('express');
const router = express.Router()
const Appointment = require('../models/appointment')
const Doctors = require('../models/doctor')


// ● Get a list of all appointments for a particular doctor and particular day
router.get('/:doctor/:day', async (req, res) => {

  //Parse Doctor first and last, retrieve ID,
  //Get All appointments
  // req.params.doctor, req.params.day

  // const doctor = await Doctors.findOne({
  //   firstName: 'Julius',
  //   lastName: 'Hibbert'
  // })
  try {
    const appointments = await Appointment.find()
    res.json(appointments)

  } catch (err) {
    res.status(500).json({message: err.message})
  }
})

//Create appointment record
router.post('/', async (req, res) => {

  //kind validate date

  //test
  //new Date(year, monthIndex, day, hours, minutes)
  let date = new Date(2025, 10, 23, 11, 45)

  //check if doctor in DB
  //Retrieve Doctor
  let first = req.body.doctorFirstName
  let last = req.body.doctorLastName
  console.log(first, last)
  try {
    let first = req.body.doctorFirstName
  let last = req.body.doctorLastName
  console.log(typeof first,typeof last)
    const doctor = await Doctors.findOne({
      firstName: 'Julius',
      lastName: 'Hibbert'
    })

    const appointment = new Appointment({
      patientFirstName: req.body.patientFirstName,
      patientLastName: req.body.patientLastName,
      date: date,
      kind: req.body.kind,
      doctor: doctor
    })

    const newAppointment = await appointment.save()
    res.status(201).json(newAppointment)

  } catch (err) {
    console.log('rrr;;;')
      res.status(500).json({message: err.message})
  }

})

module.exports = router;