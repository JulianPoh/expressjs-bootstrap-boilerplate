const express = require('express');
const router = express.Router();

// The main route
router.get('/', (request, response) => {
  response.render('home', {
    title: 'Home',
    description: 'My lovely first website with Node.js'
  })
});

module.exports = router;
