const angularApp = angular.module('desafio5App', []);

angularApp.service('UsuarioService', function () {
  const usuariosSistema = window.SistemaEscola?.usuarios || [];

  const usuarios = usuariosSistema.map((usuario, index) => {
    const tipoNormalizado = usuario.tipo === 'aluno' ? 'Aluno' : 'Professor';

    return {
      nome: usuario.nome,
      tipo: tipoNormalizado,
      dataCadastro: new Date(2026, 1, 10 + index)
    };
  });

  this.listar = function () {
    return usuarios;
  };

  this.adicionar = function (usuario) {
    usuarios.push({
      nome: usuario.nome,
      tipo: usuario.tipo,
      dataCadastro: new Date()
    });
  };

  this.remover = function (index) {
    if (index >= 0 && index < usuarios.length) {
      usuarios.splice(index, 1);
    }
  };
});

angularApp.controller('AppController', ['$scope', '$timeout', 'UsuarioService', function ($scope, $timeout, UsuarioService) {
  $scope.usuarios = UsuarioService.listar();
  $scope.novoUsuario = {
    nome: '',
    tipo: 'Aluno'
  };
  $scope.notificacao = {
    visivel: false,
    mensagem: '',
    tipo: 'success'
  };

  let temporizadorNotificacao = null;

  $scope.mostrarNotificacao = function (mensagem, tipo) {
    if (temporizadorNotificacao) {
      $timeout.cancel(temporizadorNotificacao);
    }

    $scope.notificacao.mensagem = mensagem;
    $scope.notificacao.tipo = tipo || 'success';
    $scope.notificacao.visivel = true;

    temporizadorNotificacao = $timeout(function () {
      $scope.notificacao.visivel = false;
    }, 2200);
  };

  $scope.adicionarUsuario = function () {
    const nome = ($scope.novoUsuario.nome || '').trim();

    if (!nome) {
      return;
    }

    UsuarioService.adicionar({
      nome: nome,
      tipo: $scope.novoUsuario.tipo || 'Aluno'
    });

    $scope.mostrarNotificacao('Usuario adicionado com sucesso.', 'success');

    $scope.novoUsuario.nome = '';
    $scope.novoUsuario.tipo = 'Aluno';
  };

  $scope.removerUsuario = function (usuario) {
    const index = $scope.usuarios.indexOf(usuario);
    const nomeUsuario = usuario.nome;

    UsuarioService.remover(index);
    $scope.mostrarNotificacao('Usuario ' + nomeUsuario + ' removido.', 'danger');
  };
}]);

angularApp.controller('ListaUsuariosController', ['$scope', function ($scope) {
  $scope.filtro = '';
  $scope.filtroTipo = '';
}]);
