var tape = require('tape');
var shot = require('shot');
var assert = require('assert');
var homeHandler =require('../handlers/home.js');
var generalHandler = require('../handlers/generalHandler.js');
var journeyHandler = require('../handlers/journeyApi.js');
var testrequest = require('request');
var router = require('routes')();



tape("check to see if the server is running ok", function (t) {
  shot.inject(homeHandler, {method: 'get', url: '/'},function (res){
    var result = res.statusCode;
    t.equal(result, 200, "success!");
    t.end();
  });
});


tape("check general request is reaching general handler", function(t) {

  var request = {
    method: "GET",
    url: "/frontend.js"
	};
  shot.inject(generalHandler, request, function(response){
  	t.equal(response.statusCode, 200 , 'our request for frontend.js is in the general handler!');
  	t.end();
  });
});

tape("check if general request is not reaching general handler and returns an error", function(t) {

  var request = {
    method: "GET",
    url: "public/frontend.js"
	};
  shot.inject(generalHandler, request, function(response){
  	t.equal(response.statusCode, 404, 'our request for frontend.js is returning an error!');
  	t.end();
  });
});

tape("check to see if the server is running ok", function (t) {
  shot.inject(journeyHandler, {method: 'get', url: '/journey/bank%20underground%20station/mile%20end%20underground%20station'},match,function (res){
    var result = res.statusCode;
    console.log(res);
    t.equal(result, 200, "success!");
    t.end();
  });
});
