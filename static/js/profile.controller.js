angular
   .module('app')
   .controller('ProfileController', function() {
       var vm = this
       vm.champion=[
           {image: "/images/Anon.jpg" , name: "person", picture_name: "picture", tag: "stuff" }
        ];
    });