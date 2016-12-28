(function(){
  'use strict';

   angular
    .module('agendaAudora', [])
      .controller('ControllerPrincipal', function DemoCtrl($scope, Atividades) {
          $scope.listaDias = Atividades.listarTodas();
      });

})();