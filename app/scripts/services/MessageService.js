/// <reference path="../../../typings/index.d.ts" />

angular.module('ChatApp')

.factory('MessageService', ['$http', 'DataService', function ($http, DataService) {
	var self = this;
	self.DataService = DataService;

	self.getAllMessages = function () {
		return self.DataService.allMessages;
	};

	self.getMessageThreadWithUser = function (id) {
		var response = [];
		for (var i = 0; i < self.DataService.allMessages.length; i++) {
			if (self.DataService.allMessages[i].senderId === id || self.DataService.allMessages[i].targetId === id) {
				response.push(self.DataService.allMessages[i]);
			}
		}
		return response;
	};

	self.getLastMessageInThreadWithUser = function (id) {
		var response = "";
		for (var i = self.DataService.allMessages.length - 1; i >= 0 ; i--) {
			if (self.DataService.allMessages[i].senderId === id || self.DataService.allMessages[i].targetId === id) {
				response = self.DataService.allMessages[i];
				break;
			}
		}
		return response;
	};

	self.getMessagesSentByUser = function (id) {
		var response = [];
		for (var i = 0; i < self.DataService.allMessages.length; i++) {
			if (self.DataService.allMessages[i].senderId === id) {
				response.push(self.DataService.allMessages[i]);
			}
		}
		return response;
	};

	self.getMessagesSentToUser = function (id) {
		var response = [];
		for (var i = 0; i < self.DataService.allMessages.length; i++) {
			if (self.DataService.allMessages[i].targetId === id) {
				response.push(self.DataService.allMessages[i]);
			}
		}
		return response;
	};

	self.sendMessage = function (message) {
		var len = self.DataService.allMessages.length;
		var lastMessage = self.DataService.allMessages[len - 1];
		var newId = lastMessage.id + 1;
		message.id = newId;
		self.DataService.allMessages.push(message);
	};

	return {
		getAllMessages: self.getAllMessages,
		getMessagesSentToUser: self.getMessagesSentToUser,
		getMessagesSentByUser: self.getMessagesSentByUser,
		getMessageThreadWithUser: self.getMessageThreadWithUser,
		getLastMessageInThreadWithUser: self.getLastMessageInThreadWithUser,
		sendMessage: self.sendMessage
	};
}]);