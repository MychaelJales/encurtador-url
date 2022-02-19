const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const Url = require('../models/Url');
const utils = require('../utils/utils');
require('dotenv').config({ path: '../config/.env' });

// Short URL Generator
router.post('/short', async (req, res) => {
  const { origUrl, user } = req.body;
  const base = process.env.BASE;

  const urlId = shortid.generate();
  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          user,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid Original Url');
  }
});

router.get('/aa', async (req, res) => {
  try {
    const url = await Url.find({}).lean().exec();
    res.json(url);
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
})

router.delete('/bb', async (req, res) => {
  try {
    const test = 't5wRzbcU2';
    const url = await Url.deleteOne({ urlId: test });
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
})

router.get('/urlsCreated/:user', async (req, res) => {
  try {
    const { user } = req.params;
    console.log(user);
    const urls = await Url.find({ user }).lean().exec();
    res.json(urls)
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
})

module.exports = router;
