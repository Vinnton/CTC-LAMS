/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
define(['angular', 'angular-ui-router'], function(angular) {
    'use strict';
    return angular.module('app.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        //Turn on or off HTML5 mode which uses the # hash
        $locationProvider.html5Mode(true).hashPrefix('!');

        /**
         * Router paths
         * This is where the name of the route is matched to the controller and view template.
         */
        $stateProvider
            .state('secure', {
                template: '<ui-view/>',
                abstract: true,
                resolve: {
                    authenticated: ['$q', 'PredixUserService', function ($q, predixUserService) {
                        var deferred = $q.defer();
                        predixUserService.isAuthenticated().then(function(userInfo){
                            deferred.resolve(userInfo);
                        }, function(){
                            deferred.reject({code: 'UNAUTHORIZED'});
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state('dashboards', {
                parent: 'secure',
                url: '/dashboards',
                templateUrl: 'views/dashboards.html',
                controller: 'DashboardsCtrl'
            })
            .state('AssetMap', {
                url: '/AssetMap',
                templateUrl: 'views/AssetMap.html',
            })
            .state('E1', {
                url: '/E1',
                templateUrl: 'views/E1.html',
            })
            .state('E2', {
                url: '/E2',
                templateUrl: 'views/E2.html'
            })
            .state('E3', {
                url: '/E3',
                templateUrl: 'views/E3.html'
            })
            .state('W1', {
                url: '/W1',
                templateUrl: 'views/W1.html'
            })
            .state('W2', {
                url: '/W2',
                templateUrl: 'views/W2.html'
            })
            .state('W3', {
                url: '/W3',
                templateUrl: 'views/W3.html'
            })
            .state('statistic', {
                url: '/statistic',
                templateUrl: 'views/statistic.html'
            })
            .state('history', {
                url: '/history',
                templateUrl: 'views/history.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            });


        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            document.querySelector('px-app-nav').markSelected('/dashboards');
            $state.go('dashboards');
        });

    }]);
});
