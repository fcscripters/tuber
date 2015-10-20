var http = require('http');
var url = require('url');
var router = require('./router.js')();
var port = process.env.PORT || 8000;

router.addRoute('/', require('./handlers/home.js'));
router.addRoute('/favicon.ico', require('./handlers/faviconHandler.js'));

function app(req, res) {
  var path = url.parse(req.url).pathname;
  var match = router.match(path);
  match.fn(req, res);
}

http.createServer(app).listen(port);
console.log('you are listening on: ', port )
