// Code goes here
(function(){

var app = angular.module("githubViewer",[]);
    
var MainController = function($scope, $http) {
  
    var onUserComplete = function(response){
      $scope.user = response.data;
    };
    
    var onError = function(reason){
        $scope.error = "Could not fetch the user";
    };
    
    $http.get("http://api.github.com/users/angular")
    .then(onUserComplete, onError);
 
  $scope.username = "angular";
  $scope.message = "GitHub Viewer";
 
  
};
    
    app.controller("MainController", MainController);

}());