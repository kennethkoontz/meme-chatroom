/*angular*/
    /*.module('app')
    var CarsController = CarsController
    .controller('CarsController', function() {
        document.addEventListener('DOMContentLoaded', function(event){
            console.log('stuff');
        });
    })
    */
angular
  .module('app', [])
  .controller('AppCtrl', function(vm, $http) {
    $http({
      method: 'get',
      url: '/cars'
    }).then(function(result) {
      vm.cars = result.data;
    });
    vm.submit = function() {
      $http({
        method: 'post',
        url:'/cars',
        data: vm.newCar
      }).then(function(result){
        vm.cars.push(result.data);
      });
      vm.cars.push(vm.newCar);
    };
    
    vm.edit = function(car) {
      car.editting = true;
    };
    
    vm.close = function(car) {
      $http({
        method: 'patch',
        url: '/cars/' + car._id,
        data: car
      }).then(function(res){
        car.editting = false;
      });
    };
    
    vm.delete = function(index, car) {
      $http({
        method: 'delete',
        url: '/cars/' + car._id
      }).then(function(result){
        vm.cars.splice(index, 1);          
      });
    };
  });