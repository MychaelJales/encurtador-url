const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
require('dotenv').config({ path: '../config/.env' });
const jsonwebtoken = require('jsonwebtoken');

router.post('/', async (req, res) => {
  const { user, password } = req.body;
  try {
    let foundUser = await Users.findOne({user});
        if (!foundUser) {
            newUser = new Users({
                user,
                password,
            });
            await newUser.save();
            Token = await jsonwebtoken.sign({
              user,
              password,
            }, 'SenhaParaProtegerOToken');
            res.status(200).json(Token);
        } else {
            // console.log('Email already used');
            const users = await Users.find({}).lean().exec();
            res.status(400).json('User already used');
        }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }

});

module.exports = router;
