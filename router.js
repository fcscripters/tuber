function route() {

    var routes = {};
    var routeArray = [];
    routes.addRoute = function(params, path, handler) {
        var routeObj = 
        {
            params: {
                from: from,
                to: to
            },
            path: path,
            fn: handler
        };
        routeArray.push(routeObj)
    };

    routes.match = function(path) {
        var matches = routeArray.filter(function(routeObj) {
            console.log("PATH: ", path);
            return routeObj.path === path;
        });
        console.log(matches);
        return matches[0];


    };

    return routes;

}

module.exports = route;
