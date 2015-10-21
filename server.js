var http = require('http');
var url = require('url');
var router = require('./router.js')();

var fs =require('fs');

var port = process.env.PORT || 8000;



router.addRoute('/favicon.ico', require('./handlers/faviconHandler.js'));
router.addRoute('/', require('./handlers/home.js'));
router.addRoute('/frontend.js', require('./handlers/frontendHandler.js'));
router.addRoute('/journey/:from/:to', require('./handlers/journeyApi.js'));

function app(req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);
 		console.log(router);

  match.fn(req, res);
}

http.createServer(app).listen(port);
console.log('you are listening on: ', port )
