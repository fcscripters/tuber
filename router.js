function route() {

    var routes = {};
    var routeArray = [];

    routes.addRoute = function(path, handler) {
        var routeObj = {
            path: path,
            fn: handler
        };
        routeArray.push(routeObj)
    	console.log('THIS IS ROUTE ARRAY', routeArray);
    };

    routes.match = function(path) {
        var matches = routeArray.filter(function(routeObj) {
        	console.log("PATH: ", path);
        	if (routeObj.path === path){ console.log( 'IN MATCH')};
            return routeObj.path === path;
        });
        console.log(matches);
        return matches[0];


    };

    return routes;

}

module.exports =route;