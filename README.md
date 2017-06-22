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

I have built a small photo gallery application using React/Redux and Node.js. This app uses the Flickr API to query groups of photos based on a text query. You can scroll "infinitely", ultimately revealing more photos based on the same text query.

#### Why Flickr?

When I began this project, I took a look at numerous photo gallery APIs. The first one that came to mind was the Instagram API.  I knew from past experience that the API only supports a "sandbox" mode prior to your app's approval. This 'sandbox' mode only allows a developer to query up to 10 Instagram users and get 20 photos from each of them. Also, each user has to be manually added and authenticated. I then checked out the Imgur API and Flickr API, both of which were great, but the Imgur API requires OAuth authentication for each application. For the sake of speed, search, and pagination, I chose to use the FlickrAPI.

#### Why Redux?

Redux provides optimal organization, trickle-down state that allows components to be stateless, and an easy way to de-couple data driven components vs UI driven components. For the scope of this application, Redux is definitely overkill, but if this app were to be added on to in the future, the data pipeline would be intuitive to follow and testable. Above all else, I love building with it!

---
### Features

#### Search

Luckily enough, the Flickr API provides a standard searching endpoint. This API endpoint provides pagination and the ability to pass a text query as a parameter. This text query searches photo names, descriptions and tags for the best match. I've definined a route within my express server namespaced as /api/photos. Upon entering the input field, I pass this route a text query to retreive all initial photos.

#### Infinite Scroll

Once the initial search returns photos, a user can scroll down to load more photos of the same text query. This action occurs when a pre-defined pixel or waypoint has been passed whle scrolling. An action is dispatched which ulimately make a request to a new route within the express server /api/photos/:page. A synchronous 'loading' action is also dispatched in order to render a spinning wheel during the API call.

---
### State

```js
  {
    photos: {
      photos: [],
      page: 1
      isLoading: false
    }
  }
```

* `photos` - An array of Flickr photos. Each photo provides a server-id, id, farm-id, and secret. These values can be used to contruct a photo url using this formula: `https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg`
* `page` - A number that corresponds to the results page the current query is at. This number is passed as a parameter into the Flickr API
* `isLoading` - A boolean. This value is toggled `true` when an API request is made. Subsequently, rendering a loading spinner on the page 

---
### Optimizations

One concern I have with infinite scroll is the never ending photo creation. Eventually, this will slow down the frontend of the application just due to the number of images rendered. One could implement a FIFO (first in first out) system that would remove extremely old photos from the page. Then implement the same waypoint system while scrolling upward, although this time the application server will pull from a cache instead of the API. Not a perfect solution, but in many cases, it would improve frontend speed.

Also, it will be important to persist scroll location state to localStorage. From a UX perspecive, a user will have a much smoother experience if he/she can show up at the same scroll location when using their browser's back button.

---
### Photo

![alt text](https://s3-us-west-1.amazonaws.com/ruckus-music/Screen+Shot+2017-06-22+at+1.51.56+AM.png)

---
### Responsiveness

In order to acheive responsiveness, I took advantage of the [CSS column-count](https://www.w3schools.com/cssref/css3_pr_column-count.asp) property. This property is often used when diplaying text in columns similar to a text book. When the user's view port is greater then 1000px, 3 image columns are rendered. This is great because the browser will resize the width of each image column to make it fit without distorting each photo. I've added media querys that change the number of columns to 2 and 1 when the page is less than 1000px and 600px, respectively. 

One issue with rendering photos this way is the infinite scroll implementation. Because the photos are ordered by column, new photos added move or shift the pre-existing photos.
