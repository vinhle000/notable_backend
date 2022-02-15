const mongoose = require('mongoose')
const Doctor = require('../models/doctor')

//TODO:
  //Add date/time restriction for 15 minute intervals
  //Add kind restriction
const appointmentSchema = new mongoose.Schema({
  patientFirstName:{
    type: String,
    required: true,
  },
  patientLastName:{
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
    default: Date.now,
  },
  kind: {
    type: String,
    require: true,
    // require: [true, 'New Patient', 'Follow-up'],
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctors'
  }

})


module.exports = mongoose.model('Appointment', appointmentSchema)

// Appointments
// -patientFirstName
// -patientLastName
// -date(ca only start in 15 minute intervals)
// -kind(new patient or Follow-up)
// -Doctor(foreign key)
