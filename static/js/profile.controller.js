angular
   .module('app')
   .controller('ProfileController', function($scope) {
        $scope.champion=[
           {image: "/images/Anon.jpg" , name: "person", picture_name: "picture", tag: "stuff" }
        ];
    });