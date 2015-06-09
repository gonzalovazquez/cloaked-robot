angular.module('cloaked-robot', [
    'ui.bootstrap',
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$locationProvider',
    function ($urlRouterProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }])
  .run(['$rootScope', '$state', function ($rootScope, $state) {
    'use strict';

    // this is available from all across the app
    $rootScope.appName = 'cloaked-robot';

    // make $state available from templates
    $rootScope.$state = $state;
  }]);