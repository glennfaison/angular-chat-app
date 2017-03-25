/// <reference path="../../../typings/index.d.ts" />

angular.module('ChatApp')

.controller('ChatPageViewController', ['UserService', 'MessageService', function (UserService, MessageService) {
	var self = this;
	self.MessageService = MessageService;
	self.UserService = UserService;
	self.titleText = "";
	self.currentTab = "Recently Contacted";
	self.messageForm = {};
	self.messageForm.messageText = "";
	self.currentChat = null;

	self.setTab = function (tab) {
		self.currentTab = tab;
	};

	self.sendMessage = function () {
		if (self.messageForm.messageText.length === 0) {
			return;
		}
		var newMessage = {
			senderId: self.getCurrentUser().id,
			targetId: self.currentChat.id === null? 0: self.currentChat.id,
			messageText: self.messageForm.messageText,
			id: 0
		};
		var response = self.MessageService.sendMessage(newMessage);
		self.messageForm = {};
		return response;
	};

	self.setCurrentChat = function (user) {
		self.currentChat = user;
	};

	self.getAllMessages = function () {
		var response = self.MessageService.getAllMessages();
		return response;
	};

	self.getMessageThreadWithUser = function (userId) {
		var response = self.MessageService.getMessageThreadWithUser(userId);
		return response;
	};
	self.getAllContacts = function () {
		var response = self.UserService.getAllUsers();
		return response;
	};

	self.getRecentlyContacted = function () { 
		var response = self.UserService.getAllContacts();
		return response;
	};

	self.getLastMessageInThreadWithUser = function (userId) {
		var response = self.MessageService.getLastMessageInThreadWithUser(userId);
		return response;
	};

	self.getCurrentUser = function () {
		var response = self.UserService.currentUser;
		return response;
	};

	self.setTwoLayerMessageContainer = function () {
		var row1 = document.getElementById("messaging-widgets-container-row1");
		row1.className = "fill-width";
	};

	self.getUserById = function (userId) {
		var response = self.UserService.getUserById(userId);
		return response;
	};

	self.setOneLayerMessageContainer = function () {
		var row1 = document.getElementById("messaging-widgets-container-row1");
		row1.className = "";
	};

	self.resize = function () {
		var row1 = document.getElementById("messaging-widgets-container-row1");
		if (row1.width <= 500) {
			self.setTwoLayerMessageContainer();
		}
		else {
			self.setOneLayerMessageContainer();
		}
	};

	self.setTwoLayerMessageContainer();
	//self.setOneLayerMessageContainer();
}]);