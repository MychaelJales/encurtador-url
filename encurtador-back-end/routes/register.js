const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
require('dotenv').config({ path: '../config/.env' });

router.post('/', async (req, res) => {
  const { user, password } = req.body;
  console.log(user);
  try {
    let foundUser = await Users.findOne({user});
        if (!foundUser) {
            newUser = new Users({
                user,
                password,
            });
            await newUser.save();
            res.status(200).json('Register successful');
        } else {
            // console.log('Email already used');
            const users = await Users.find({}).lean().exec();
            res.status(400).json('Email already used');
        }
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }

});

module.exports = router;
