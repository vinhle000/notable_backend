const express = require('express');
const router = express.Router();



//Get all
router.get('/', async (req, res) => {
  res.send('Hello World')

})

module.exports = router;