var http = require('http');
var url = require('url');
var router = require('routes')();
var generalHandler = require('./handlers/generalHandler');
var fs =require('fs');

var port = process.env.PORT || 8000;

router.addRoute('/favicon.ico', require('./handlers/faviconHandler.js'));
router.addRoute('/', require('./handlers/home.js'));
router.addRoute('/journey/:departureStation/:arrivalStation', require('./handlers/journeyApi.js'));
router.addRoute('/frontendTest', require('./handlers/frontendTest.js'));
router.addRoute('/autocomplete/:userInput', require('./handlers/autocompleteHandler.js'));



function handler(req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);

  if(match){
    match.fn(req, res, match);
  }else{
    generalHandler(req,res);
  }
}

http.createServer(handler).listen(port);
console.log('you are listening on: ', port );
