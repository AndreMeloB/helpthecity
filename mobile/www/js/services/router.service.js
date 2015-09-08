'use strict';

angular.module('htc.services')

.factory('routerService', function () {
	var baseURL = '127.0.0.1:5000/htc/api/';
	
	return {
		loginUrl: baseURL + 'login',
		createUserUrl: baseURL + 'user',
		getUserUrl: baseURL + 'user'
	};
});