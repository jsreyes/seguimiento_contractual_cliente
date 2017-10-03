'use strict';

/**
 * @ngdoc function
 * @name seguimientoContractualClienteApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the seguimientoContractualClienteApp
 */
angular.module('seguimientoContractualClienteApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
