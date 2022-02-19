const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
require('dotenv').config({ path: '../config/.env' });
const jsonwebtoken = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { Token } = req.body;

  if (Token) {
    try {
      Auth = await jsonwebtoken.verify(Token, 'SenhaParaProtegerOToken', (err, decoded) => ({err, decoded}));
      if (Auth.decoded) {
        const { user, password } = Auth.decoded;
        let foundUser = await Users.findOne({user, password});
        if (foundUser) {
          res.status(200).json(foundUser.user);
        } else {
          res.status(401).json('User not registered')
        }
      } else {
        res.status(402).json('Token invalid. Login again.');
      }
    } catch (err) {
      res.status(500).json('Server Error');
    }
  } else {
    res.status(403).json('User not logged');
  }
});

module.exports = router;
