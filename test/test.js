var tape = require('tape');
var shot = require('shot');
var assert = require('assert');
var handler =require('../handlers/home.js')


tape("check to see if the server is running ok", function (t) {
  shot.inject(handler, {method: 'get', url: '/'},function (res){
    var result = res.statusCode;
    t.equal(result, 200, "success!");
    t.end();
  });
});