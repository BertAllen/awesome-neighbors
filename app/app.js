app.controller("NeighborController", function ($scope) {
    $scope.neighbors = [];
    $scope.Neighbor = function ($scope.person) {
        this.firstName = $scope.person.firstName;
        this.lastName = $scope.person.lastName;
        this.address = $scope.person.address;
        this.phone = $scope.person.phone;
        this.talents = [];
        this.needs = [];
        if ($scope.person.talent1) {
            this.talents.push($scope.person.talent1);
        }
        if ($scope.person.talent2) {
            this.talents.push($scope.person.talent2);
        }
        if ($scope.person.talent3) {
            this.talents.push($scope.person.talent3);
        }
        if ($scope.person.talent4) {
            this.talents.push($scope.person.talent4);
        }
        if ($scope.person.talent5) {
            this.talents.push($scope.person.talent5);
        }
        if ($scope.person.need1) {
            this.needs.push($scope.person.need1);
        }
        if ($scope.person.need2) {
            this.needs.push($scope.person.need2);
        }
        if ($scope.person.need3) {
            this.needs.push($scope.person.need3);
        }
        if ($scope.person.need4) {
            this.needs.push($scope.person.need4);
        }
        if ($scope.person.need5) {
            this.needs.push($scope.person.need5);
        }
    }
    $scope.addNeighbor = function ($scope.person) {
        var human = new Neighbor($scope.person);
        $scope.neighbors.push(human);
}


});