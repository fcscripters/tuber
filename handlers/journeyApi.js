  var http = require('http');
var request = require('request');
var fs = require('fs');
var stations = require('./stations.js');
var env = require('env2')('./config.env');

module.exports = function JourneyApi(req, res, match) {
 // console.log('>>>>>>>>>>>>>>>>>>>',match);
    var departure = match.params.departureStation.replace(/\s+/g, '%20');
    var arrival = match.params.arrivalStation.replace(/\s+/g, '%20');
    res.writeHead(200, {
      "content-type": "text/javascript"
    });
    request('https://api.tfl.gov.uk/Journey/JourneyResults/' + departure + '/to/' + arrival + '?nationalSearch=False&&&timeIs=Departing&&mode=tube&&&&&&&&&&&alternativeCycle=False&alternativeWalking=True&applyHtmlMarkup=False&useMultiModalCall=False&app_id='+process.env.appid+'&app_key='+process.env.appkey, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          var journeyObject = JSON.parse(body);
          if (!journeyObject.journeys) {
            res.end("Try again, you may have spelt it wrong!");
          } else {
            var sortedJourneysArr = [];

            function pushDepartureToArr(journeyObject) {
              var departureObject = {};
              departureObject['id'] = journeyObject.journeys[0].legs[0].departurePoint.naptanId;
              departureObject['name'] = journeyObject.journeys[0].legs[0].departurePoint.commonName;
              sortedJourneysArr.push(departureObject);
            }
            var legsArray = journeyObject.journeys[0].legs
            var stoppointsArr = legsArray.reduce(function(prev, current) {
              return prev.concat(current.path.stopPoints)
            }, []);

            function pushStopPointsToArr(journeyObject) {
              var sortedStopsArray = stoppointsArr.map(function(obj) {
                var newObj = {};
                newObj['id'] = obj.id;
                newObj['name'] = obj.name;
                return newObj;
              });
              return sortedJourneysArr.concat(sortedStopsArray);
            }
            pushDepartureToArr(journeyObject);
            var journeyArray = pushStopPointsToArr(journeyObject);
            var journeyJSON = {
              "type": "FeatureCollection",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
              },
              "features": []
            };

            journeyArray.forEach(function(obj, i) {
              var lat = "";
              var long = "";

              stations.features.forEach(addLatLong);

              function addLatLong(element){
                if (element.id === obj.id) {
                lat = element.properties.latitude;
                long = element.properties.longitude;
                }
              }

              // for (i = 0; i < stations.features.length; i++) {
              //   if (stations.features[i].id === obj.id) {
              //     lat = stations.features[i].properties.latitude;
              //     long = stations.features[i].properties.longitude;
              //   }
              // }
              var toAppendtoFeaturesArray = {
                "type": "Feature",
                "properties": {
                  "latitude": lat,
                  "longitude": long,
                  "id": obj.id,
                  "time": i + 1,
                  "name": obj.name
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [long, lat]
                }
              };
              journeyJSON.features.push(toAppendtoFeaturesArray);
            });
            fs.writeFile("./public/journey.geojson", JSON.stringify(journeyJSON),
              function(err) {
                if (err) {
                  return console.log(err);
                }
                res.end();
              });

          }
        }
        });

    };
