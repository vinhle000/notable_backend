const mongoose = require('mongoose')


const doctorSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    require: true,
  }
})


module.exports = mongoose.model('Doctor', doctorSchema)