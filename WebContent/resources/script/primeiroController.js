var app = angular.module('loja', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when("/",{controller: "listController", templateUrl: "list.html"})
	.when("/edit/:name",{controller: "editController", templateUrl: "form.html"})
	.when("/new",{controller: "newController", templateUrl: "form.html"})
	.otherwise({redirectTo: "/"})
});

app.run(function($rootScope) {
	$rootScope.frutas = [ 'banana', 'abacaxi', 'pera'];
});

app.controller('listController', ['$scope','$routeParams','$rootScope','$route','$location', function($scope,$routeParams,$rootScope,$route,$location) {

} ]);

app.controller('editController', ['$scope','$routeParams','$rootScope','$route','$location',
		function editController($scope,$routeParams,$rootScope,$route,$location) {
			$scope.title = 'Editar frutas';
			$scope.fruta = $routParams.name;
			$scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);

			$scope.salvar = function() {
				$scope.frutas[$scope.frutaIndex] = $scope.fruta;
				$location.path("/");
			};
		} ]);

app.controller('newController', ['$scope','$routeParams','$rootScope','$route','$location',
		function newController($scope,$routeParams,$rootScope,$route,$location) {
			$scope.title = 'Nova Fruta';
			$scope.fruta = '';

			$scope.salvar = function() {
				$scope.frutas.push($scope.fruta);
				$location.path('/');
			};
		} ]);

app.controller('priceCtrl', function($scope) {
	$scope.price = '58';
});

app.controller('clientesCtrl', function($scope) {
	$scope.clientes = [
		{nome:'Marcio',sobreNome: "Pascuali"},
		{nome:'Joao',sobreNome:'Dora'}
		];
});

app.controller('nomesCtrl', function($scope) {
	$scope.nomes = [
		'Maria',
		'Jose',
		'Lucas',
		'Carla'
	];
});

app.controller('clientesCtrl2', function($scope) {
	$scope.clientes = [
		{nome:'Marcio',sobreNome: "Pascuali"},
		{nome:'Joao',sobreNome:'Dora'},
		{nome:'Juca',sobreNome:'Souza'},
		{nome:'Paulo',sobreNome:'Americo'},
		{nome:'Adao',sobreNome:'Martins'},
		{nome:'Carla',sobreNome:'Lucas'},
		{nome:'Suzana',sobreNome:'Azira'},
		{nome:'Patricia',sobreNome:'Volk'}
		];
	
	$scope.orderByMe = function(x) {
		$scope.myOrderBy = x;
	};
});

app.controller('localizacao', function($scope, $location) {
	$scope.myUrl=$location.absUrl();
});

app.controller('controllerTimeOut', function($scope, $timeout) {
	$scope.timermsg = "Oi!";
	$timeout(function() {
		$scope.timermsg = "Depois de 3 segundos";
	}, 3000);
});

app.controller('intervalo', function($scope, $interval) {
	$scope.intervalo = new Date().toLocaleTimeString();
	$interval(function() {
		$scope.intervalo = new Date().toLocaleTimeString();
	});
});