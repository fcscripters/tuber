var fs = require('fs');
var frontend= fs.readFileSync('/home/tormod/FAC6/tuber/public/frontend.js')


module.exports =function frontendHandler(req,res){
		console.log('BOOM IN FE HANDLER',req.url);
		res.writeHead(200, {'Content-Type':'text/js'});
		res.end(frontend);
}




