angular
   .module('app')
   .controller('feedController', function() {
        var vm = this
        vm.post=[

           {image: "/images/hotdog.jpg" , name: "Person", picture_name: "picture", tag: "Tag"}

        ];
    });