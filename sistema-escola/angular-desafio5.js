const angularApp = angular.module('desafio5App', []);

angularApp.controller('AppController', ['$scope', function ($scope) {
  const usuariosSistema = window.SistemaEscola?.usuarios || [];

  $scope.usuarios = usuariosSistema.map((usuario, index) => {
    const tipoNormalizado = usuario.tipo === 'aluno' ? 'Aluno' : 'Professor';

    return {
      nome: usuario.nome,
      tipo: tipoNormalizado,
      dataCadastro: new Date(2026, 1, 10 + index)
    };
  });
}]);

angularApp.controller('ListaUsuariosController', ['$scope', function ($scope) {
  $scope.filtro = '';
  $scope.filtroTipo = '';
}]);
