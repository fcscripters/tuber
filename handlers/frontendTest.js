var fs =require('fs');
var frontendTest = fs.readFileSync(__dirname + '/../public/frontendTest.html');


module.exports = function forntendTest(req, res){
  
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(frontendTest);
};
