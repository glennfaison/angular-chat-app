/// <reference path="../../../typings/index.d.ts" />

angular.module('ChatApp')

.factory('DataService', ['$http', function ($http) {
	var self = this;

	self.registeredUsers = [
		{
			email: "admin@example.com",
			id: 1,
			imagePath: "images/default_profile_picture.png",
			password: "admin",
			username: "admin"
		},
		{
			email: "achabill12@gmail.com",
			id: 2,
			imagePath: "images/default_profile_picture.png",
			password: "achabill",
			username: "achabill"
		},
		{
			email: "tarkangmcshan@gmail.com",
			id: 3,
			imagePath: "images/default_profile_picture.png",
			password: "bate-epey",
			username: "bate-epey"
		},
		{
			email: "btiayon@gmail.com",
			id: 4,
			imagePath: "images/default_profile_picture.png",
			password: "beri",
			username: "beri"
		},
		{
			email: "ctiayon@gmail.com",
			id: 5,
			imagePath: "images/default_profile_picture.png",
			password: "carla",
			username: "carla"
		}
	];

	self.onlineUsers = [];

	self.allMessages = [
		{
			id: 1,
			messageText: "Hello. How do you do?",
			senderId: 2,
			targetId: 1
		},
		{
			id: 2,
			messageText: "I'm all good! What about you?",
			senderId: 1,
			targetId: 2
		},
		{
			id: 3,
			messageText: "Aall iz vell!",
			senderId: 2,
			targetId: 1
		}
	];

	return {
		registeredUsers: self.registeredUsers,
		onlineUsers: self.onlineUsers,
		allMessages: self.allMessages
	};
}]);