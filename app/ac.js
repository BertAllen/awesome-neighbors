;(function(){

 
angular.module("awesomeNeighbors")
    .constant('FBREF', 'https://resplendent-torch-2208.firebaseio.com/')
    .component("awesomeComponent", {
        templateUrl: "app/awesome-filterer.html",
        controller: AwesomeController,
        controllerAs: "ac"
    })

// AwesomeController.$inject = ["$scope", "FBREF", "$firebaseArray", "$firebaseObject", "NeighborService"]

    function AwesomeController() {
        var ac = this;
        ac.groupsize = "p";
        ac.helpinghands = "n";

        ac.findNeighbors = function (groupsize, helpinghands) {
            
        }
}

}());