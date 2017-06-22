const express = require('express');
const router = express.Router();
const request = require('request-promise');
const _ = require('./util');

router.get('/photos', (req, res) => {
  let flickrUrl = _.buildFlickrURL(req);

  request(flickrUrl)
      .then((photos) => {
        res.json(photos);
      }).catch((err) => {
        res.status(500).json(err);
      });
});

module.exports = router;
