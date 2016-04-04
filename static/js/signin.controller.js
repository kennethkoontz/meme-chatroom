angular
   .module('app')
   .controller('signinController', function($http) {
      var vm = this;   
      vm.user = {};
      vm.signin = signin;
      
      function signin() {
         $http({
            url: '/api/users',
            method: 'post',
            data: vm.user
         }).then(function(res) {
            console.log('signed in');   
            vm.users.push(result.data);
         });
      }
      
   })