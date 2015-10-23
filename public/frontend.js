var journeyButton = document.getElementById('journeyButton');

var journeyJSON;
var journeyJSONstring;

journeyButton.addEventListener('click', function() {


    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if(request.responseText.length > 1){
            console.log('>>>>',request.responseText);
            alert(request.responseText);
          }
          else{
            renderMapJourney();
          }

        }
    };
    request.open('GET', '/journey/' + departureStation + '/' + arrivalStation, true);
    request.send();

});





function renderMapJourney() {


    //TO DO How to clear the layers

    //this styles the stations in leaflet


    //sets up a d3 svg layer on top of the leaflet map
    var svg = d3.select(map.getPanes().overlayPane).append("svg");

    var g = svg.append("g").attr("class", "leaflet-zoom-hide");
    var d3path = "";
    //call back function takes data from points.geojson ect...
    d3.json("journey.geojson", function(error, points) {

        if (error) throw error;
        //points.features is points.geojson as an array
        var pointsData = points.features;
        //runs the project points func to match the leaflet and d3 pixel postions
        var transform = d3.geo.transform({
            point: projectPoint
        });

        d3path = d3.geo.path().projection(transform);
        //Here we're creating a FUNCTION to generate a line from input points.
        var toLine = d3.svg.line().interpolate("linear").x(function(d) {
            return applyLatLngToLayer(d).x
        }).y(function(d) {
            return applyLatLngToLayer(d).y
        });
        //we take all the g elemets create points and lines which will be projected later
        var pointFeature = g.selectAll("circle")
            .data(pointsData)
            .enter().append("circle")
            .attr("r", 3)
            .attr("class", "waypoints");

        var linePath = g.selectAll(".lineConnect")
            .data([pointsData])
            .enter()
            .append("path")
            .attr("class", "lineConnect");

        var marker = g.append("circle")
            .attr("r", 10)
            .attr("id", "marker")
            .attr("class", "travelMarker");

        // when the user zooms in or out you need to reset the view
        map.on("viewreset", reset);
        // this puts stuff on the map!
        reset();
        transition();

        function reset() {
            //for framing the map
            var bounds = d3path.bounds(points);
            var topLeft = bounds[0];
            var bottomRight = bounds[1];

            pointFeature.attr("transform", function(d) {
                return "translate(" + applyLatLngToLayer(d).x + "," + applyLatLngToLayer(d).y + ")";
            });
            // the starting point
            marker.attr("transform", function() {
                var y = pointsData[0].geometry.coordinates[1]
                var x = pointsData[0].geometry.coordinates[0]
                return "translate(" + map.latLngToLayerPoint(new L.LatLng(y, x)).x + "," + map.latLngToLayerPoint(new L.LatLng(y, x)).y + ")";
            });
            //the code below makes sure the map can zoom in and out
            svg.attr("width", bottomRight[0] - topLeft[0])
                .attr("height", bottomRight[1] - topLeft[1])
                .style("left", topLeft[0] + "px")
                .style("top", topLeft[1] + "px");

            linePath.attr("d", toLine)

            g.attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");
        } //end reset
        //these two functions dictate the movement between the markers
        function transition() {
            linePath.transition()
                .duration(7500)
                .attrTween("stroke-dasharray", tweenDash)
                .each("end", function() {
                    d3.select(this).call(transition); // infinite loop
                });
        }

        function tweenDash() {
            return function(t) {
                var l = linePath.node().getTotalLength();
                interpolate = d3.interpolateString("0," + l, l + "," + l);
                var marker = d3.select("#marker");
                var p = linePath.node().getPointAtLength(t * l);
                marker.attr("transform", "translate(" + p.x + "," + p.y + ")"); //move marker
                //console.log(interpolate(t))
                return interpolate(t);
            }
        }
        //these two function use leaflet functions convert the lat long to pix values
        function projectPoint(x, y) {
            var point = map.latLngToLayerPoint(new L.LatLng(y, x));
            this.stream.point(point.x, point.y);
        }

        function applyLatLngToLayer(d) {
            var y = d.geometry.coordinates[1]
            var x = d.geometry.coordinates[0]
            return map.latLngToLayerPoint(new L.LatLng(y, x))
        }
    });

}



  var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v3/examples.map-zr0njcqy/{z}/{x}/{y}.png', {
    attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
  });

  var map = L.map('map')
    .addLayer(mapboxTiles)
    .setView([51.5113, -0.1281], 12);

    var geojsonMarkerOptions = {
      radius: 4,
      fillColor: "blue",
      color: "blue",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.3
    };

    L.geoJson(stations,{
        pointToLayer: function(features, latlng) {
          return L.circleMarker(latlng, geojsonMarkerOptions);
      },
      onEachFeature: yourOnEachFeatureFunction
    }).addTo(map);

    function yourOnEachFeatureFunction(features, layer) {
      if (features.properties["Full Name"]) {
        layer.bindPopup(features.properties["Full Name"]);
      }
    }
