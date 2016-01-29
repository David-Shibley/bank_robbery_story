var app = angular.module('bankRobberyApp', ["ngRoute", "ui.bootstrap"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'homeController'
  }).when('/game', {
    templateUrl: 'partials/game.html',
    controller: 'gameController'
  }).when('/supersecretroutedontlookatthisurlmwahahahaha', {
    templateUrl: 'partials/win.html',
    controller: 'winController'
  }).otherwise('/');
});
