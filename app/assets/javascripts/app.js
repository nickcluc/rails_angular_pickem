/*jslint node: true*/
/*global angular*/
"use strict";

angular.module('pickem', ['ui.router', 'templates'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/_home.html',
                    controller: 'HomeCtrl',
                    resolve: {
                        leaguePromise: ['leagues', function (leagues) {
                            return leagues.getAll();
                        }]
                    }
                })

                .state('viewLeague', {
                    url: '/leagues/{id}',
                    templateUrl: 'leagues/_show_league.html',
                    controller: 'LeaguesCtrl',
                    resolve: {
                        league: ['$stateParams', 'leagues', function ($stateParams, leagues) {
                            return leagues.get($stateParams.id);
                        }]
                    }
                })

                .state('newLeague', {
                    url: '/new_league',
                    templateUrl: 'leagues/_new_league.html',
                    controller: 'LeaguesCtrl'
                });

            $urlRouterProvider.otherwise('home');
        }]);
