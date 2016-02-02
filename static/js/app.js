/*global angular*/

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");
      $stateProvider
        .state('feed', {
          url: "/feed",
          templateUrl: "feed.html"
        })
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg.html"
        })
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "login.html"
        }) 
        .state('profile', {
          url: "/profile",
          templateUrl: "profile.html"
        })  
        .state('settings', {
          url: "/settings",
          templateUrl: "settings.html"
        })  
        .state('signup', {
          url: "/signup",
          templateUrl: "signup.html"
        })  
        .state('subs', {
          url: "/subs",
          templateUrl: "subs.html"
        })
    });