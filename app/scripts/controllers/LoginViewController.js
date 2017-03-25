/// <reference path="../../../typings/index.d.ts" />

angular.module('ChatApp')

.controller('LoginViewController', ['$location', 'UserService', function ($location, UserService) {
	var self = this;
	self.loginForm = {};
	self.errorMessage = "";
	self.UserService = UserService;
	self.location = $location;

	self.resetLoginForm = function () {
		self.loginForm.username = "";
		self.loginForm.password = "";
		self.errorMessage = "";
	};

	self.login = function () {
		self.errorMessage = self.UserService.login(self.loginForm.username, self.loginForm.password).errorMessage;
		if (self.errorMessage === "") {
			self.location.path('/');
		}
	};
}]);