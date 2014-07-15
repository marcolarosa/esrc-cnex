'use strict';

angular.module('interfaceApp')
  .controller('MainCtrl', [ '$scope', 'configuration', '$http', function ($scope, configuration, $http) {

      var q = configuration[configuration.service] + '?callback=JSON_CALLBACK';
      console.log(q);
      $http.jsonp(q).then(function(d) {
          var sites = [];
          angular.forEach(d.data.sites, function(v, k) {
              sites.push([k, v]);
          });
          $scope.sites = sites.sort();
          $scope.serviceUnavailable = false;
      },
      function() {
          $scope.serviceUnavailable = true;
      });
  }]);