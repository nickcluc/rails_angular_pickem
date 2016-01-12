/*jslint node: true */
/*global angular*/
'use strict';

angular.module('pickem')
    .controller('LeaguesCtrl', ['$scope', 'leagues',
        function ($scope, leagues) {
            // $scope.league = league;

            $scope.createLeague = function () {
                if (!$scope.name || $scope.name === '') { return; }
                leagues.create({
                    name: $scope.name,
                    description: $scope.description
                });
                $scope.name = '';
                $scope.description = '';
            };

        }]);
