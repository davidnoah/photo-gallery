const express = require('express');
const router = express.Router();
const request = require('request-promise');
const _ = require('./util');

router.get('/photos', (req, res) => {
  let flickrUrl = _.buildFlickrURL(req);
  console.log('searching!', flickrUrl);

  request(flickrUrl)
      .then((photos) => {
        console.log('found photos');
        res.json(JSON.parse(photos).photos.photo);
      }).catch((err) => {
        console.log('failure finding photos', err);
        res.status(500).json(err);
      });
});

module.exports = router;
