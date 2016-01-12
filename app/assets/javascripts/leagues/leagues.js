/*jslint node: true */
/*global angular*/
'use strict';

angular.module('pickem')
    .factory('leagues', ['$http',
        function ($http) {
            var o = {
                leagues: []
            };
            o.getAll = function () {
                return $http.get('/leagues.json').success(function (data) {
                    angular.copy(data, o.leagues);
                });
            };
            o.create = function (league) {
                return $http.post('/leagues.json', league).success(function (data) {
                    o.leagues.push(data);
                });
            };
            o.get = function (id) {
                return $http.get('/leagues/' + id + '.json').then(function (response) {
                    return response.data;
                });
            };

            return o;
        }]);
