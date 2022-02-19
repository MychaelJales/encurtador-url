const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
require('dotenv').config({ path: '../config/.env' });
const jsonwebtoken = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { user, password } = req.body;

  let foundUser = await Users.findOne({user, password});
  if (foundUser) {
    try {
      Token = await jsonwebtoken.sign({
        user,
        password,
      }, 'SenhaParaProtegerOToken');
      res.status(200).json(Token);
      res.send('Login successful');
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid User name or password');
  }
});

module.exports = router;
