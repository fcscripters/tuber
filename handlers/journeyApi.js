var env = require('env2')('./config.env');

module.exports = function home(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});

  res.end();
};

