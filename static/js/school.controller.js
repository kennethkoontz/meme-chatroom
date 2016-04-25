angular
   .module('app')
   .controller('schoolController', function() {
       var vm = this
       vm.post=[

           {image: "/images/hotdog.jpg" , name: "Person", picture_name: "picture", tag: "Tag"}

        ];
       vm.champion=[
           {image: "/images/Anon.jpg" , name: "person", picture_name: "picture", tag: "stuff" }
        ];
    });