'use strict';

/**
 * @ngdoc service
 * @name micensoApp.datos
 * @description
 * # datos
 * Service in the micensoApp.
 */
angular.module('micensoApp')
  .service('datos', ['$http', function($http){
          this.getData = function(parametros){
              return $http.post('a',{
                  'param': parametros
              });
          };
  }]);

//app.service('getDataService', ['$http', function($http){
//	this.getData = function(parametros){
//		return $http.post('consulta/getData', {
//			'parametros': parametros
//		});
//	};
//}])