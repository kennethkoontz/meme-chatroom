/*global angular*/

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");
      $stateProvider
        .state('feed', {
          url: "/feed",
          templateUrl: "feed.html",
          controller: 'feedController'
        })
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg.html",
          controller: 'frontPgController'
        })
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2.html",
          controller: 'frontPg_2Controller'
        })
        .state('login', {
          url: "/login",
          templateUrl: "login.html",
          controller: 'loginController'
        }) 
        .state('profile', {
          url: "/profile",
          templateUrl: "profile.html",
          controller: 'profileController'
        })  
        .state('settings', {
          url: "/settings",
          templateUrl: "settings.html",
          controller: 'settingsController'
        })  
        .state('signup', {
          url: "/signup",
          templateUrl: "signup.html",
          controller: 'signupController'
        })  
        .state('subs', {
          url: "/subs",
          templateUrl: "subs.html",
          controller: 'subsController'
        })
    });