'use strict';

angular.module('htc.controllers')

.controller('homeController', ['$scope', '$http', '$location', 'routerService', 'localStorageService', function ($scope, $http, $location, routerService, localStorageService) {
  $scope.email = '';
  $scope.password = '';

  $scope.isLoggedIn = function () {
    if (localStorageService.get('user')) return true;
    else return false;
  };

  $scope.login = function (email, password) {
    var data = {
      email: email,
      password: password
    };

    $http.post(routerService.loginUrl, JSON.stringify(data)).then(function (response) {
      localStorageService.setObject('user', response.data);
      $location.path('/tab/listOfReports');
    }, function (response) {
      alert('Tente novamente!');
    });
  };
}]);