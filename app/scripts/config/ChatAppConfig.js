/// <reference path="../../../typings/index.d.ts" />

angular.module('ChatApp')
.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider.when('/', {
		templateUrl: 'views/ChatPageView.html',
		controller: 'ChatPageViewController',
		controllerAs: 'chatPageCtrl'
	})

	.when('/login', {
		templateUrl: 'views/LoginView.html',
		controller: 'LoginViewController',
		controllerAs: 'loginCtrl'
	})

	.otherwise({
		redirectTo: '/'
	});
}]);