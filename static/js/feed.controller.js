angular
   .module('app')
   .controller('FeedController', function() {
        var vm = this
        vm.post=[
           {image: "/images/hotdog.jpg" , name: "Person", picture_name: "picture", tag: "Tag", love:"/images/Champ.png" }
        ];
    });