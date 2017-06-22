// Utility Functions
exports.buildFlickrURL = (req) => (
  `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&format=json&nojsoncallback=1&text=${req.query.query}`
);
