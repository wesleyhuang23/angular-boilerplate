angular.module('app',['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
//   .state('home', {
//     templateUrl: 'views/home.html',
//     url: '/'
//   });


  $urlRouterProvider.otherwise('/');

});
angular.module('app').controller('appCtrl', function($scope, mainSvc){
    $scope.test = 'Everything is Ready to go, start hacking!';
});
angular.module('app').service('mainSvc', function($http){
    
})
//# sourceMappingURL=main.js.map
