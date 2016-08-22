; (function () {

    angular.module("awesomeNeighbors", ['firebase'])
        .component("neighborComponent", {
            templateUrl: "app/neighbor-input.html",
            controller: NeighborController,
            controllerAs: "nc"
        });

    // NeighborController.$inject = ["NeighborService"];

    function NeighborController() {
        var nc = this;
        nc.test = "hello from the Neighbor Controller"
        // var ns = NeighborService;
        nc.neighbors = [];
        // nc.moNeighbors = ns.neighbors
        nc.Neighbor = function (person) {
            // debugger;

            this.firstName = person.firstName;
            this.lastName = person.lastName;
            this.address = person.address;
            this.phone = person.phone;
            this.talents = [];
            this.needs = [];
            for (var i = 0; i < 5; i++) {
                if (person.talent[i]) {
                    this.talents.push(person.talent[i]);
                }
                if (person.need[i]) {
                    this.needs.push(person.need[i]);
                }
            }
        }

        nc.addNeighbor = function (person) {
            // debugger
            var human = new nc.Neighbor(person);
            // NeighborService.neighbors.push(human);
            // nc.neighbors = NeighborService.neighbors;
            nc.neighbors.push(human);
            localStorage.setItem(JSON.stringify(human))
            nc.person = {}
        }


    }
} ());
