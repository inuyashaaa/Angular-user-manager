'use strict';

angular.
  module('userManager').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.
        when('/login', {
          template: '<login-app></login-app>'
        }).
        when('/users', {
          resolve: {
            "check": function($rootScope, $location){
              if (!$rootScope.loggedIn) {
                $location.path('/login');
              }
            }
          },
          template: '<user-list></user-list>'
        }).
        when('/users/:userId', {
          template: '<user-detail></user-detail>'
        }).
        otherwise('/login');
    }
  ]);
