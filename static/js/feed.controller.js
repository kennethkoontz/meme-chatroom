angular
   .module('app')
   .controller('FeedController', function($scope) {
        $scope.post=[
           {image: "/images/Anon.jpg" , name: "Person", picture_name: "picture", tag: "Tag" }
        ];
    });