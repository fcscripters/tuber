var http = require('http');
var url = require('url');
var router = require('routes')();

var fs =require('fs');

var port = process.env.PORT || 8000;



router.addRoute('/favicon.ico', require('./handlers/faviconHandler.js'));
router.addRoute('/', require('./handlers/home.js'));
router.addRoute('/frontend.js', require('./handlers/frontendHandler.js'));
router.addRoute('/journey/:departureStation/:arrivalStation', require('./handlers/journeyApi.js'));

function app(req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);

  match.fn(req, res, match);
}

http.createServer(app).listen(port);
console.log('you are listening on: ', port );
