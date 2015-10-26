var fs = require('fs');

module.exports = function favicon(req, res) {
    fs.readFile("./public" + req.url, function(err, file) {
    	console.log()
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html'
            });
            res.end("resource not found");
        } else {
            var ext = req.url.split(".")[1];
            res.writeHead(200, {
                'content-type': 'text/' + ext
            });
            res.end(file);
        }

    })
};
