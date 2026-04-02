(function () {
  "use strict";

  angular
    .module("cadastroApp", [])
    .service("UsuarioService", UsuarioService)
    .controller("CadastroController", CadastroController);

  UsuarioService.$inject = ["$q"];
  function UsuarioService($q) {
    this.salvar = function salvar(usuario) {
      var deferred = $q.defer();

      // Simula atraso de API com Promise + setTimeout.
      setTimeout(function () {
        deferred.resolve({
          id: Date.now(),
          nome: usuario.nome,
          email: usuario.email,
          tipo: usuario.tipo
        });
      }, 1800);

      return deferred.promise;
    };
  }

  CadastroController.$inject = ["UsuarioService", "$timeout"];
  function CadastroController(UsuarioService, $timeout) {
    var vm = this;

    vm.usuario = novoUsuario();
    vm.usuarios = [];
    vm.salvando = false;
    vm.mensagemSucesso = "";
    vm.enviar = enviar;

    function enviar(form) {
      if (form.$invalid || vm.salvando) {
        return;
      }

      vm.salvando = true;
      vm.mensagemSucesso = "";

      UsuarioService.salvar(vm.usuario)
        .then(function (usuarioSalvo) {
          vm.usuarios.push(usuarioSalvo);
          vm.usuario = novoUsuario();
          form.$setPristine();
          form.$setUntouched();
          vm.mensagemSucesso = "Usuario cadastrado com sucesso.";

          $timeout(function () {
            vm.mensagemSucesso = "";
          }, 2600);
        })
        .finally(function () {
          vm.salvando = false;
        });
    }

    function novoUsuario() {
      return {
        nome: "",
        email: "",
        tipo: ""
      };
    }
  }
})();
