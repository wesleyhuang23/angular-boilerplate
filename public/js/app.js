angular.module('app',['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
//   .state('home', {
//     templateUrl: 'views/home.html',
//     url: '/'
//   });


  $urlRouterProvider.otherwise('/');

});