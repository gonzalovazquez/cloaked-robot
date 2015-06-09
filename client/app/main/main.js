angular.module('cloaked-robot')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });
  }]);