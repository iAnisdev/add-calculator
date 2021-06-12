var express = require('express');
var router = express.Router();

const { body, validationResult } = require('express-validator');

router.post('/sum', 
  body('firstNumber', 'First Number Required').exists() ,
  body('secondNumber' , 'Second Number Required').exists() , function(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let sum = Number(req.body.firstNumber) + Number(req.body.secondNumber)
  return res.status(200).json({ 
    message: 1,
    sum
  });
});

module.exports = router;
