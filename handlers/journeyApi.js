var env = require('env2')('./config.env');
var http = require('http');

module.exports = function JourneyApi(req, res) {
    console.log('JOURNEY API');

    /*var options = {
        hostname:'api.tfl.gov.uk',
        port: 80,
        path: '/Journey/JourneyResults/Bethnal%20Green%20Underground%20Station/to/Liverpool%20Street%20Underground%20Station?nationalSearch=False&&&timeIs=Departing&&mode=tube&&&&&&&&&&&alternativeCycle=False&alternativeWalking=True&applyHtmlMarkup=False&useMultiModalCall=False&app_id=22e08f6b&app_key=c16e4ee45d8253d4e2e7649174057f08',
        method: 'GET'
    };


    callback = function(repsonse) {
        var str = '';
        console.log('JOURNEY API CB');
        res.on('data', function(chunk) {
            console.log (chunk);
            str += chunk;
        });
        res.on('end', function() {
            var data =JSON.parse(str);
            console.log(data);
        });
    }

    http.request(options, callback).end();*/

};
