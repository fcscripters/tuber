[![Code Climate](https://codeclimate.com/github/fcscripters/tuber/badges/gpa.svg)](https://codeclimate.com/github/fcscripters/tuber)
[![codecov.io](https://codecov.io/github/fcscripters/tuber/coverage.svg?branch=master)](https://codecov.io/github/fcscripters/tuber?branch=master)
[![Codecrystal](https://img.shields.io/badge/code-crystal-5CB3FF.svg)](http://codecrystal.herokuapp.com/crystalise/fcscripters/tuber/master)
[![bitHound Score](https://www.bithound.io/github/fcscripters/tuber/badges/score.svg)](https://www.bithound.io/github/fcscripters/tuber)
[![bitHound Dependencies](https://www.bithound.io/github/fcscripters/tuber/badges/dependencies.svg)](https://www.bithound.io/github/fcscripters/tuber/master/dependencies/npm)

## TÜBER

View your journey animated through London

#### How to use it?
- Visit our [site](http://tuberscripters.herokuapp.com/) and enter your journey to view the animation

#### To run locally
- Download our repo, `npm install` and then `node server.js`. Visit our site on localhost:8000

## What is this?

We are creating a map that displays London Underground routes with animations, allowing the user to choose departure and arrival stations.

We are using Leaflet.js & D3 to animate the maps, and to calculate the journey we are using the TFL API.

We plan to make updates to the UI, so that each line is represented by its colour and each stop will have a pop-up as the train passes through it.

We use travis, Istanbul and tape for C-I and coverage testing, for the front end we used Qunit.

##Wireframes
![imag0564](https://cloud.githubusercontent.com/assets/2305591/10691233/9547fc14-797f-11e5-8ee4-6d5ba1c4f8e6.jpg)



## Router

We are using the router outlined in our morning challenge.

https://github.com/foundersandcoders/morning-challenge/tree/master/routerChallenge

This involves two files: server.js, router.js and handler.js

## Dependencies

URL

##Dev-dependencies

Shot
Tape
Istanbul

#### Test

Qunit

Front-end tests will be achieved using Qunit.

## Tools


##Commands

Install dependencies with
```
npm install
```
Start the server with:
```
node server.js
```

Run the tests with make t or npm test

## Acknowledgements

The tfl api was core to our project.

We used the Leaflet JS library in conjunction with D3: 

http://leafletjs.com/

We used the 'Visualising London Tube Map' for the coordinates of stations.

http://bl.ocks.org/nicola/69730fc4180246b0d56d#index.html

This tutorial was incredibly useful and helped us a great deal with animation

http://zevross.com/blog/2014/09/30/use-the-amazing-d3-library-to-animate-a-path-on-a-leaflet-map/

The Naptan IDs were matched to the station names using the information available here:

https://gist.github.com/i-like-robots/a4608cbdf21d979d9452



