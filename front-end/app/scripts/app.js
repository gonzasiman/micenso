'use strict';

/**
 * @ngdoc overview
 * @name micensoApp
 * @description
 * # micensoApp
 *
 * Main module of the application.
 */
angular
  .module('micensoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'nvd3ChartDirectives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
