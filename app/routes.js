const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// Branching
router.post('/question-toast-failure', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
  
    const glutenAllergy = req.session.data['gluten-allergy']
  
    if (glutenAllergy === 'Yes') {
      res.redirect('/question-toast-failure')
    } else {
      res.redirect('/question-toast-1')
    }
  })