app.config(["$routeProvider", "$locationProvider", "routeResolveProvider", function($routeProvider, $locationProvider, routeResolveProvider) {
	var route = routeResolveProvider.route;

	/*$routeProvider
		.when("/", route.resolve('CONTROLLER', 'VIEW'))
	;*/

	$locationProvider.html5Mode(true);
}]);