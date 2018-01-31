const express = require('express');
const router = express.Router();

// The main route
router.get('/', (request, response) => {
  response.render('home')
});

module.exports = router;
