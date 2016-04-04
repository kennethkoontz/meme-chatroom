angular
   .module('app')
   .controller('signupController', function($http) {
      var vm = this;   
      vm.user = {};
      vm.signup = signup;
      
      function signup() {
         $http({
            url: '/api/users',
            method: 'post',
            data: vm.user
         }).then(function(res) {
            console.log('created user');   
            vm.users.push(result.data);
         });
      }
      
   })