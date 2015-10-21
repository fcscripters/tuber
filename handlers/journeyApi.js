//var env = require('env2')('./config.env');
var http = require('http');
var request = require('request');


module.exports = function JourneyApi(req, res, match) {


    var departure = match.params.departureStation.replace(/\s+/g,'%20');
    var arrival = match.params.arrivalStation.replace(/\s+/g,'%20');
    console.log(departure);

// console.log('>>>>>', departure);
// console.log('>>>>>', arrival);

  res.writeHead(200,{"content-type":"text/javascript"});

  request('https://api.tfl.gov.uk/Journey/JourneyResults/'+departure+'/to/'+arrival+'?nationalSearch=False&&&timeIs=Departing&&mode=tube&&&&&&&&&&&alternativeCycle=False&alternativeWalking=True&applyHtmlMarkup=False&useMultiModalCall=False&app_id=79820393&app_key=86e9a97b79e1d6524b134f521c40dfd1',function(error,response,body){
    if(!error && response.statusCode == 200){

    var journey = JSON.parse(body);
    console.log(Object.keys(journey));
    console.log(journey.journeys);


      res.end(body);

    }
  });

};
