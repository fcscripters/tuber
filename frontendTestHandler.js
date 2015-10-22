var fs =require('fs');
var forntEndTest = fs.readFileSync(__dirname + '/../public/forntEndTest.html');


module.exports = function frontEndTest(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(frontEndTest);
};
