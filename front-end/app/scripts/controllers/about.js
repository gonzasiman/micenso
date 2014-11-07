'use strict';

/**
 * @ngdoc function
 * @name micensoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the micensoApp
 */
angular.module('micensoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
