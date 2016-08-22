;(function(){

 
angular.module("awesomeNeighbors")
    .constant('FBREF', 'https://resplendent-torch-2208.firebaseio.com/')
    .component("awesomeFilter", {
        templateUrl: "app/awesome-filterer.html",
        controller: AwesomeFilter,
        controllerAs: "af"
    })

// AwesomeController.$inject = ["$scope", "FBREF", "$firebaseArray", "$firebaseObject", "NeighborService"]

    function AwesomeFilter() {
        var af = this;
        af.groupsize = "p";
        af.helpinghands = "n";

        af.findNeighbors = function (groupsize, helpinghands) {
            if (groupsize == "p") {
                ac.personalList();
            } else {
                ac.groupList();
            }
        }

        af.personalList = function (name) {
            //find matches for a persons needs and talents
        }

        af.groupList = function (helpinghands, spec) {
            //find all people with a particular need ro talent
        }
}

}());