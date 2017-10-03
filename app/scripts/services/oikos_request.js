'use strict';

/**
 * @ngdoc service
 * @name seguimientoContractualClienteApp.oikosRequest
 * @description
 * # oikosRequest
 * Factory in the seguimientoContractualClienteApp.
 */
angular.module('seguimientoContractualClienteApp')
  .factory('oikosRequest', function ($http) {
    // Service logic
    // Service logic
    var path = "http://10.20.0.254/oikos_api/v1/";
    // Public API here
    return {
      get: function (tabla,params) {
        return $http.get(path+tabla+"/?"+params);
      },
      post: function (tabla,elemento) {
        return $http.post(path+tabla,elemento);
      },
      put: function (tabla,id,elemento) {
        return $http.put(path+tabla+"/"+id,elemento);
      },
      delete: function (tabla,id) {
        return $http.delete(path+tabla+"/"+id);
      }
    };
  });
