const express = require('express');
const app = express();

// configure environment variables that contain secret keys
require('dotenv').config({path: './secret.env'});

const path = require('path');
const cors = require('cors');

const router = require('./router');

// use cross origin requests module
app.use(cors());

// require all static assets
app.use(express.static(path.join(__dirname, 'public')));

// require router file and namespace by /api
app.use('/api', router);

// catch all route, ensures react-router works on hard reload
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

// initialize server
app.listen(process.env.PORT || 8080, () => {
  console.log('Magic is happening...');
});
