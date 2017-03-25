/// <reference path="../../../typings/index.d.ts" />

angular.module('ChatApp')

.factory('UserService', ['$http', 'DataService', function ($http, DataService) {
	var self = this;
	self.DataService = DataService;
	self.currentUser = {
		email: "admin@example.com",
		id: 1,
		username: "admin",
		password: "admin"
	};

	self.getUserByUsername = function (username) {
		var response = null;
		for (var i = 0; i < self.DataService.registeredUsers.length; i++) {
			if (self.DataService.registeredUsers[i].username === username) {
				response = self.DataService.registeredUsers[i];
				break;
			}
		}
		return response;
	};

	self.getUserByEmail = function (email) {
		var response = null;
		for (var i = 0; i < self.DataService.registeredUsers.length; i++) {
			if (self.DataService.registeredUsers[i].email === email) {
				response = self.DataService.registeredUsers[i];
				break;
			}
		}
		return response;
	};

	self.getUserById = function (id) {
		var response = null;
		for (var i = 0; i < self.DataService.registeredUsers.length; i++) {
			if (self.DataService.registeredUsers[i].id === id) {
				response = self.DataService.registeredUsers[i];
				break;
			}
		}
		return response;
	};

	self.getAllUsers = function () {
		return self.DataService.registeredUsers;
	};

	self.getAllContacts = function () {
		var response = [];
		if (self.currentUser === null) {
			return response;
		}
		for (var i = 0; i < self.DataService.registeredUsers.length; i++) {
			if (self.DataService.registeredUsers[i].id !== self.currentUser.id) {
				response.push(self.DataService.registeredUsers[i]);
			}
		}
		return response;
	};

	self.login = function (username, password) {
		var response = {
			user: null,
			errorMessage: "Invalid username or password!"
		};
		for (var i = 0; i < self.DataService.registeredUsers.length; i++) {
			if (self.DataService.registeredUsers[i].username === username && self.DataService.registeredUsers[i].password === password) {
				response.user = self.DataService.registeredUsers[i];
				response.errorMessage = "";
				self.DataService.onlineUsers.push(self.DataService.registeredUsers[i]);
				self.currentUser = self.DataService.registeredUsers[i];
				break;
			}
		}
		return response;
	};

	self.logout = function (id) {
		self.currentUser = null;
		for (var i = 0; i < self.DataService.onlineUsers.length; i++) {
			if (self.DataService.onlineUsers[i].id === id) {
				self.DataService.onlineUsers.splice(i, 1);
				break;
			}
		}
	};

	return self;
}]);