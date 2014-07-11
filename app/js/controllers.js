'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', '$resource', function($scope, $resource) {
    $scope.yummly = $resource('http://api.yummly.com/v1/api/recipes?_app_id=cc0d17aa&_app_key=e73d873af1a09a167ca88bc54c4cedbb&',
      {callback: 'JSON_CALLBACK'},
      {get: {method: 'JSONP'}});
    $scope.search = function() {
      $scope.results = $scope.yummly.get({q:$scope.searchTerms, maxResult:$scope.maxResults.number, start:10});
      document.getElementById('pagination').className = '';
    };

    $scope.perPage = [{number:10}, {number:20}, {number:50}];
    $scope.maxResults = $scope.perPage[0];
    $scope.currentPage = 0;
  }])
  .controller('MyCtrl2', ['$scope', '$resource', '$routeParams', function($scope, $resource, $routeParams) {
    $scope.recipeId = $routeParams.recipeId;
  	var yummly = $resource("http://api.yummly.com/v1/api/recipe/:recipeId?_app_id=cc0d17aa&_app_key=e73d873af1a09a167ca88bc54c4cedbb",
      {recipeId: $scope.recipeId, callback:'JSON_CALLBACK'},
      {get: {method: 'JSONP'}});
    $scope.recipe = yummly.get();
  }]);
