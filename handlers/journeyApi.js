//var env = require('env2')('./config.env');
var http = require('http');
var request = require('request');


module.exports = function JourneyApi(req, res, match) {


    var departure = match.params.departureStation.replace(/\s+/g, '%20');
    var arrival = match.params.arrivalStation.replace(/\s+/g, '%20');
    console.log(departure);

    res.writeHead(200, {
        "content-type": "text/javascript"
    });

    request('https://api.tfl.gov.uk/Journey/JourneyResults/' + departure + '/to/' + arrival + '?nationalSearch=False&&&timeIs=Departing&&mode=tube&&&&&&&&&&&alternativeCycle=False&alternativeWalking=True&applyHtmlMarkup=False&useMultiModalCall=False&app_id=79820393&app_key=86e9a97b79e1d6524b134f521c40dfd1', function(error, response, body) {
        
        if (!error && response.statusCode == 200) {

            var journeyObject = JSON.parse(body);
           

            var sortedJourneysArr = [];

            function pushDepartureToArr(journeyObject) {
                var departureObject = {};
                departureObject['id'] = journeyObject.journeys[0].legs[0].departurePoint.naptanId;
                departureObject['name'] = journeyObject.journeys[0].legs[0].departurePoint.commonName;
              
                sortedJourneysArr.push(departureObject);
            }

            function pushStopPointsToArr(journeyObject) {
                stopsArray = journeyObject.journeys[0].legs[0].path.stopPoints

                var sortedStopsArray = stopsArray.map(function(obj) {
                    var newObj = {};
                    newObj['id'] = obj.id;
                    newObj['name'] = obj.name;
                    return newObj;
                });
                  
                return sortedJourneysArr.concat(sortedStopsArray);
            }       

                       pushDepartureToArr(journeyObject);
           console.log(pushStopPointsToArr(journeyObject));
            
       
          res.end(body);
        }
    });

};
