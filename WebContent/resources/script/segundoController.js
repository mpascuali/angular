var app = angular.module('loja', ['ngRoute','ngResource']);

// Inicio HTTP

app.controller('pegaResposta', function($scope, $http) {

	$scope.pegarResposta = function() {
		$http.get("pegarResposta").then(function(res) {
			document.getElementById("res").value = "" + res.data;
		});
	};

});

app.controller('pegaResposta2', function($scope, $http) {

	$scope.pegarResposta2 = function() {
		$http.get("pegarResposta")
		.then(function(res) {
			document.getElementById("resposta2").value = "" + res.data;
			document.getElementById("resposta3").value = "" + res.status;
			document.getElementById("resposta4").value = "" + res.statusText;
		});
	};

});


app.controller('listaCtrl', function($scope, $http) {
	$http.get("jsonExample").then(function(res) {
		$scope.lista = res.data;
	});
});


app.controller('selectNames', function($scope) {
	$scope.names = ["Maria", "José", "Paulo"];
});



//Inicio Ajax
app.controller('requisicaiAjax', function($scope, $resource) {
	pessoas = $resource("/angular/pessoas/?codPessoa=:codPessoa");
	
	//Busca por ID
	$scope.getPorId = function() {
		pessoas.get({codPessoa: $scope.codPessoa}, function(data) {
			$scope.objetoPessoa = data;
		});
	};
	
	//Busca Todod
	$scope.getPorTodos = function() {
		pessoas.query(function(data) {
			$scope.objetoPessoa = data;
		});
	};
	
	//Salva
	$scope.salva = function() {
		p = new Pessoas();
		p.numero = '545454';
		p.$save();
	};
	
	//Deletar
	$scope.deleta = function() {
		pessoas.delete({codPessoa: "789"})
	};
});






//Events
app.controller('formController', function($scope) {
	$scope.master = {firstName:"John",lastName:"Doe"};
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};
	$scope.reset();
});



//Filter em tabelas
app.controller('filterController', function($scope) {
	$scope.friends = [
		{
			name:"Marcio",
			lastName:"Pascuali",
			age:31
		},
		{
			name:"Jose",
			lastName:"Silva",
			age:90
		},
		{
			name:"Carla",
			lastName:"Aparecida",
			age:18
		}
	];
});