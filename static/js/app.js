/*global angular*/

angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/signup");
      $stateProvider
        .state('li', {
          abstract: true,
          templateUrl: "loggedin.html as loggedinCtrl"
        })
      
        .state('li.feed', {
          url: "/feed",
          templateUrl: "feed.html",
          controller: 'FeedController as FeedCtrl'
        })
        
        .state('frontPg', {
          url: "/frontPg",
          templateUrl: "frontPg.html",
          controller: 'frontPgcontroller as frontPgCtrl'
        })
        
        .state('frontPg_2', {
          url: "/frontPg_2",
          templateUrl: "frontPg_2.html",
          controller: 'frontPg_2controller as frontPg_2Ctrl'
        })
        
        .state('login', {
          url: "/login",
          templateUrl: "login.html",
          controller: 'logincontroller as loginCtrl'
        }) 
        
        .state('li.profile', {
          url: "/profile",
          templateUrl: "profile.html",
          controller: 'profilecontroller as profileCtrl'
        })  
        
        .state('li.settings', {
          url: "/settings",
          templateUrl: "settings.html",
          controller: 'settingscontroller as settingsCtrl'
        })  
        
        .state('signup', {
          url: "/signup",
          templateUrl: "signup.html",
          controller: 'signupcontroller as signupCtrl'
        })
        
        .state('signin', {
          url: "/signin",
          templateUrl: "signin.html",
          controller: 'signincontroller as signinCtrl'
        }) 
        
        .state('li.subs', {
          url: "/subs",
          templateUrl: "subs.html",
          controller: 'subscontroller as subsCtrl'
        })
    });