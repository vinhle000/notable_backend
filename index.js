require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection;

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.listen(3000, () =>
  console.log('Server Started'))

const doctorsRouter = require('./routes/doctors')
app.use('/doctors', doctorsRouter)


const appointmentsRouter = require('./routes/appointments')
app.use('/appointments', appointmentsRouter)
