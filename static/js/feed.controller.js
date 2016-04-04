angular
   .module('app')
   .controller('feedController', function() {
        var vm = this
        vm.post=[
           {image: "/images/Anon.jpg" , name: "Person", picture_name: "picture", tag: "Tag" }
        ];
    });