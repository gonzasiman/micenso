'use strict';

/**
 * @ngdoc directive
 * @name micensoApp.directive:formulario
 * @description
 * # formulario
 */
angular.module('micensoApp')
  .directive('ngFormulario', function () {
    return {
      templateUrl: 'views/formulario.html',
      //template: '<div></div>',
      restrict: 'E',
      replace: true,
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.add = function(){
               element.after($compile('<ng-presupuesto></ng-presupuesto>')(scope));
            };
      }
    };
  });
