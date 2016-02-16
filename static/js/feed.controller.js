angular
   .module('app')
   .controller('FeedController', function() {
        var vm = this
        vm.post=[
           {image: "/images/Anon.jpg" , name: "Person", picture_name: "picture", tag: "Tag" }
        ];
    });