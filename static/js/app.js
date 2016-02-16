/*global angular*/

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/signup");
      $stateProvider
        .state('li', {
          abstract: true,
          templateUrl: "loggedin.html"
        })
      
        .state('li.feed', {
          url: "/feed",
          templateUrl: "feed.html",
          controller: 'FeedController as FeedCtrl'
        })
        
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg.html",
          controller: 'frontPgcontroller as frontPgCrtl'
        })
        
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2.html",
          controller: 'frontPg_2controller as frontPg_2Crtl'
        })
        
        .state('login', {
          url: "/login",
          templateUrl: "login.html",
          controller: 'logincontroller as loginCrtl'
        }) 
        
        .state('li.profile', {
          url: "/profile",
          templateUrl: "profile.html",
          controller: 'profilecontroller as profileCrtl'
        })  
        
        .state('li.settings', {
          url: "/settings",
          templateUrl: "settings.html",
          controller: 'settingscontroller as settingsCrtl'
        })  
        
        .state('signup', {
          url: "/signup",
          templateUrl: "signup.html",
          controller: 'signupcontroller as signupCrtl'
        })
        
        .state('signin', {
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'signincontroller as signinCrtl'
        }) 
        
        .state('li.subs', {
          url: "/subs",
          templateUrl: "subs.html",
          controller: 'subscontroller as subsCrtl'
        })
    });