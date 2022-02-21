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

  console.log({ origUrl, user });
  const urlId = shortid.generate();
  if (utils.validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url.shortUrl);
      } else {
        const shortUrl = `${base}/${urlId}`;
        const data = new Date();
        const dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          user,
          date: dataFormatada,
        });

        await url.save();
        res.json(url.shortUrl);
      }
    } catch (err) {
      console.log(err);
      
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).send('Invalid Original Url');
  }
});

router.get('/allurls', async (req, res) => {
  try {
    const url = await Url.find({}).lean().exec();
    res.status(200).json(url);
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
})

router.delete('/delete/:urlId', async (req, res) => {
  try {
    const { urlId } = req.params;
    const url = await Url.deleteOne({ urlId });
    res.send(200);
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
