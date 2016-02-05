/*global angular*/

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/login");
      $stateProvider
        .state('feed', {
          url: "/feed",
          templateUrl: "feed.html",
          controller: 'FeedController'
        })
        
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg.html",
          controller: 'frontPgcontroller'
        })
        
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2.html",
          controller: 'frontPg_2controller'
        })
        
        .state('login', {
          url: "/login",
          templateUrl: "login.html",
          controller: 'logincontroller'
        }) 
        
        .state('profile', {
          url: "/profile",
          templateUrl: "profile.html",
          controller: 'profilecontroller'
        })  
        
        .state('settings', {
          url: "/settings",
          templateUrl: "settings.html",
          controller: 'settingscontroller'
        })  
        
        .state('signup', {
          url: "/signup",
          templateUrl: "signup.html",
          controller: 'signupcontroller'
        })  
        
        .state('subs', {
          url: "/subs",
          templateUrl: "subs.html",
          controller: 'subscontroller'
        })
    });