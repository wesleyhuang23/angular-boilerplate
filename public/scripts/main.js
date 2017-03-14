angular.module('app',['ui.router']);
angular.module('app').controller('appCtrl', function($scope, mainSvc){
    $scope.test = 'test from the main controller';
});
angular.module('app').service('mainSvc', function($http){
    
})