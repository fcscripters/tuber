var fs = require('fs');
var frontend= fs.readFileSync(__dirname + '/../public/frontend.js');


module.exports =function frontendHandler(req,res){
		res.writeHead(200, {'Content-Type':'text/js'});
		res.end(frontend);
};
