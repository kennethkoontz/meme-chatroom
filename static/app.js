angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/feed");
      $stateProvider
        .state('feed', {
          url: "/feed",
          templateUrl: "feed/feed.html"
        })
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg/frontPg.html"
        })
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2/frontPg_2.html"
        })
        .state('login', {
          url: "/login",
          templateUrl: "login/login.html"
        }) 
        .state('profile', {
          url: "/profile",
          templateUrl: "profile/profile.html"
        })  
        .state('Settings', {
          url: "/Settings",
          templateUrl: "Settings/settings.html"
        })  
        .state('SignUp', {
          url: "/SignUp",
          templateUrl: "SignUp/SignUp.html"
        })  
        .state('subs', {
          url: "/subs",
          templateUrl: "subs/subs.html"
        })
    });