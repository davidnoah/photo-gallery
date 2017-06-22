## Photo Gallery
A simple photo gallery using the Flickr API

---
### Setup

0. `git clone` this project
0. Navigate to directory
0. Run `npm install`
0. In two separate Terminal tabs respectively, run `node server.js` and `webpack -w`
0. Navigate to http://localhost:8080/

---
### Overview

I have built a small photo gallery application using React/Redux and Node.js. This app uses the Flickr API to query groups of photos based on a text query. You can scroll "infinitely" the reveal more photos of the same text query.

#### Why Flickr?

When I began this project, I took a look at numerous photo gallery APIs. The first one that came to mind was Instagram, although I know from past experience that the API only supports a "sandbox" mode prior to your app's approval. This 'sandbox' mode only allows a developer to query up to 10 Instagram users and get 20 photos from each of them, also, each user has to be manually added and authenticated. I then checked out the Imgur API and Flickr API, both of which were great, but the Imgur APi requires OAuth authentication for each application. For the sake of speed, search, and pagination, I went with Flickr.

#### Why Redux?

You may be asking why I chose to implement Redux when building this application? Redux provides optimal organization, trickle-down state that allows components to be stateless, and an easy way to de-couple data driven components vs UI driven components. For the scope of this application, Redux is definitely overkill, but if this app were to be built out in the future, the data pipeline would be intuitive to follow and testable. Above all else, I love building with it!

---
### Features

#### Search

Luckily enough, the Flickr API provides a standard searching endpoint. This API endpoint provides pagination and the ability to pass a text query as a parameter. This text query searches photo names, descriptions and tags for the best match. I've definined a route within my express server namespaced as /api/photos. Upon entering of the input field, I pass this route a text query to retreive all initial photos.

#### Infinite Scroll



#### Responsivness
