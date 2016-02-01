angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        console.log('here');
      $urlRouterProvider.otherwise("/feed");
      $stateProvider
        .state('feed', {
          url: "/feed",
          templateUrl: "feed/feed.html"
        })
    });