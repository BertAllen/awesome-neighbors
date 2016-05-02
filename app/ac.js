angular.module("MasterController")
    .constant('FBREF', 'https://resplendent-torch-2208.firebaseio.com/')
    .controller("AwesomeController", function ($scope, FBREF, $firebaseArray, $firebaseObject, NeighborService) {
        var ac = this;
        $scope.groupsize = "p";
        $scope.helpinghands = "n";
})