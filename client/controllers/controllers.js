myApp.controller('empController', function($route,$scope,$http,$routeParams){
	$scope.getEmployees = function(){
		$http.get('../api/select.php').then(function(response){
			$scope.employees = response.data;
		});
	};
	$scope.addEmployee = function(info){
		$http.post('../api/insert.php', info).then(function(response){
			window.location.href = 'http://localhost/crud_APM3/client/#/';
		});
	};
	$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.post('../api/selectone.php',{'id':id}).then(function(response){
			var emp  = response.data;
			$scope.employee = emp[0];
		});
	};
	$scope.updateEmployee = function(info){
		$http.post('../api/update.php', info).then(function(response){
			window.location.href = 'http://localhost/crud_APM3/client/#/';
		});
	};
	$scope.deleteEmployee = function(id){
		var id = id;
		$http.post('../api/delete.php',{'id':id}).then(function(response){
			$route.reload();
		});
	};

});
