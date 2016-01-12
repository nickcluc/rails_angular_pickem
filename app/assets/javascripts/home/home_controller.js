/*jslint node: true */
/*global angular*/
'use strict';

angular.module('pickem')
    .controller('HomeCtrl', [
        '$scope', 'leagues',
        function ($scope, leagues) {
            $scope.leagues = leagues.leagues;
            $scope.test = 'Test';
        }
    ]);
