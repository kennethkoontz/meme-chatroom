angular
  .module('app', [])
  .controller('AppCtrl', function($scope, $http) {
    $http({
      method: 'get',
      url: '/cars'
    }).then(function(result) {
      $scope.cars = result.data;
    });
    $scope.submit = function() {
      $http({
        method: 'post',
        url:'/cars',
        data: $scope.newCar
      }).then(function(result){
        $scope.cars.push(result.data);
      });
      $scope.cars.push($scope.newCar);
    };
    
    $scope.edit = function(car) {
      car.editting = true;
    };
    
    $scope.close = function(car) {
      $http({
        method: 'patch',
        url: '/cars/' + car._id,
        data: car
      }).then(function(res){
        car.editting = false;
      });
    };
    
    $scope.delete = function(index, car) {
      $http({
        method: 'delete',
        url: '/cars/' + car._id
      }).then(function(result){
        $scope.cars.splice(index, 1);          
      });
    };
  });