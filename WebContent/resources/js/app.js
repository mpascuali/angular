var permissao = false;
// configura��o do m�dulo
var app = angular.module('loja', [ 'ngRoute', 'ngResource', 'ngAnimate' ]);


// configurando rotas
app.config(function($routeProvider) {

			$routeProvider.when("/clientelist", {
				controller : "clienteController",
				templateUrl : "cliente/list.html"
			})// listar
			
			.when("/clienteedit/:id", {
				controller : "clienteController",
				templateUrl : "cliente/cadastro.html"
			})// editar
			
			.when("/cliente/cadastro", {
				controller : "clienteController",
				templateUrl : "cliente/cadastro.html"
			})// novo
			
			//-------------Fornecedor--------------
			$routeProvider.when("/fornecedorlist", {
				controller : "fornecedorController",
				templateUrl : "fornecedor/list.html"
			})// listar
			
			.when("/fornecedoredit/:id", {
				controller : "fornecedorController",
				templateUrl : "fornecedor/cadastro.html"
			})// editar
			
			.when("/fornecedor/cadastro", {
				controller : "fornecedorController",
				templateUrl : "fornecedor/cadastro.html"
			})// novo
			
			
			//--------------Livro---------------------
				$routeProvider.when("/livrolist", {
				controller : "livroController",
				templateUrl : "livro/list.html"
			})// listar
			
			.when("/livroedit/:id", {
				controller : "livroController",
				templateUrl : "livro/cadastro.html"
			})// editar
			
			.when("/livro/cadastro", {
				controller : "livroController",
				templateUrl : "livro/cadastro.html"
			})// novo
			
			//----------------LOJA---------------
			.when("/loja/online", {
				controller : "lojaController",
				templateUrl : "loja/online.html"
			})
			.when("/loja/intensLoja/:itens", {
				controller : "lojaController",
				templateUrl : "loja/intensLoja.html"
			})
			
			.when("/loja/pedidoconfirmado/:codigoPedido", {
				controller : "lojaController",
				templateUrl : "loja/pedidoconfirmado.html"
			})
			
			.when("/loja/pedidos", {
				controller : "lojaController",
				templateUrl : "loja/pedidos.html"
			})
			
			.when("/grafico/media_pedido", {
				controller : "lojaController",
				templateUrl : "grafico/media_pedido.html"
			})
			
			.otherwise({
				redirectTo : "/"
			});
			
			
});



app.controller('clienteController', function($scope, $http) {
	
	//Listar
	$scope.listarClientes = function() {
		$http.get("cliente/listar").success(function(response) {
			$scope.data = response;
		}).error(function(response) {
			alert.error("Erro" + response)
		});
	};
	
	
	//remover cliente passado como parametro
	$scope.removerCliente = function(codCliente) {
		$http.delete("cliente/deletar/" + codCliente).success(function(response) {
			$scope.listarClientes();
		}).error(function(data, status, headers, config) {
			erro("Error: " + status);
		});
	};
	
});


