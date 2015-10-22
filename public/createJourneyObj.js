var stations = require("./stations.js");
console.log(stations);

journeyArray.forEach(function(obj, i){
var lat = "";
var long = "";

for (i=0 ;i< stations.features.length ;i++){
  if (stations.features[i].id === obj.id ){
    lat = stations.features[i].properties.latitude;
    long = stations.features[i].properties.longitude;
  }
}
  var toAppendtoFeaturesArray = {
    "type": "Feature",
    "properties": {
      "latitude": lat,
      "longitude": long,
      "id": obj.id ,
      "time": i+1 ,
      "name": obj.name
    },
    "geometry": {
      "type": "Point",
      "coordinates": [long, lat]
    }
  };
 console.log("-------ToAppend",toAppendtoFeaturesArray);
});
