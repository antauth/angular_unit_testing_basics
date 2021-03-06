/**
 * A simple app with 1 controller & 1 service to demonstrate unit testing
 * of an angular controller using karma and jasmine.
 */
var app = angular.module('basicApp', []);
// a controller
app.controller('SimpleController', function($http){
  var self = this; // because 'this' could be changed by an outside caller
  self.data;

  // some instance data that we can test
  self.testData = [
    {message: 'I love unit testing', status: true},
    {message: 'I will use this info for evil', status: false}
  ];

  // a function we can test
  self.uselessMethod = function() {
    return 8;
  };

  // an http request we can test via mocks
  $http.get('/datRoute').then(function(response){
    self.data = response.data;
  });
});

// a service we can test
app.factory('GenericService', [function(){
  return {
    message: function() {
      return 'Look at me, I\'m a service';
    }
  }
}]);