// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/participant-information', (req, res) => {
    const exceptionStatus = req.session.data['exception-status'];
    // Check whether the variable matches a condition
    if (exceptionStatus == 'yes') {
      res.redirect('v4/participant-information-raised');
    } else {
      res.redirect('v4/participant-information-not-raised');
    }
  });

module.exports = router;
