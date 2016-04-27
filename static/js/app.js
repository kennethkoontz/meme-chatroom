/*global angular*/

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/frontPg");
      $stateProvider
        .state('li', {
          abstract: true,
          templateUrl: "loggedin.html"
        })
      
      
        .state('cars', {
          url:"/cars",
          templateUrl:"cars.html",
          controller: 'carsController as carsCtrl'
        })
        .state('li.feed', {
          url: "/feed",
          templateUrl: "feed.html",
          controller: 'feedController as feedCtrl'
        })
        
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg.html",
          controller: 'frontPgController as frontPgCtrl'
        })
        
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2.html",
          controller: 'frontPg_2Controller as frontPg_2Ctrl'
        })
        
        .state('li.profile', {
          url: "/profile",
          templateUrl: "profile.html",
          controller: 'profileController as profileCtrl'
        })  
        
        .state('li.settings', {
          url: "/settings",
          templateUrl: "settings.html",
          controller: 'settingsController as settingsCtrl'
        })  
        
        .state('signup', {
          url: "/signup",
          templateUrl: "signup.html",
          controller: 'signupController as signupCtrl'
        })
        
        .state('signin', {
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'signinController as SigninCtrl'
        }) 
        
        .state('li.subs', {
          url: "/subs",
          templateUrl: "subs.html",
          controller: 'subsController as subsCtrl'
        })
        .state('li.Game_memes', {
          url: "/Game_memes",
          templateUrl: "Game_memes.html",
          controller: 'Game_memesController as Game_memesCtrl'
        })
       .state('li.Old_memes', {
        url: "/Old_memes",
        templateUrl: "Old_memes.html",
        controller: 'Old_memesController as Old_memesCtrl'
        })
    });
