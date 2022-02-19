const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
require('dotenv').config({ path: '../config/.env' });
const jsonwebtoken = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { Auth } = req.body;
  console.log(Auth);

  if (Auth) {
    try {
      Token = await jsonwebtoken.verify(Auth, 'SenhaParaProtegerOToken', (err, decoded) => ({err, decoded}));
      console.log(Token);
      if (Token.decoded) {
        const { user, password } = Token.decoded;
        let foundUser = await Users.findOne({user, password});
        if (foundUser) {
          res.status(200).json('Login successful');
        } else {
          res.status(400).json('User not registered')
        }
      } else {
        res.status(400).json('Token invalid. Login again.');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('User not logged');
  }
});

module.exports = router;
