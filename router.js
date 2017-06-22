const express = require('express');
const router = express.Router();
const request = require('request-promise');
const _ = require('./util');

router.get('/photos', (req, res) => {
  let flickrUrl = _.buildFlickrURL(req);

  request(flickrUrl)
      .then((photos) => {
        console.log('found photos');
        res.json(JSON.parse(photos).photos.photo);
      }).catch((err) => {
        console.log('failure finding photos', err);
        res.status(500).json(err);
      });
});

router.get('/photos/:page', (req, res) => {
  let newPageUrl = _.buildNewPageURL(req);

  request(newPageUrl)
      .then((photos) => {
        console.log('found more photos');
        res.json(JSON.parse(photos).photos.photo);
      }).catch((err) => {
        console.log('failure finding more photos', err);
        res.status(500).json(err);
      });
});

module.exports = router;
