angular.module("MasterController", ['firebase'])
    .controller("NeighborController", function (NeighborService) {
        var nc = this;
        var ns = NeighborService;
        this.neighbors = [];
        // nc.moNeighbors = ns.neighbors
        this.Neighbor = function (person) {
            debugger;
            this.firstName = person.firstName;
            this.lastName = person.lastName;
            this.address = person.address;
            this.phone = person.phone;
            this.talents = [];
            this.needs = [];
            if (nc.person.talent1) {
                this.talents.push(person.talent1);
            }
            if (person.talent2) {
                this.talents.push(person.talent2);
            }
            if (person.talent3) {
                this.talents.push(person.talent3);
            }
            if (person.talent4) {
                this.talents.push(person.talent4);
            }
            if (person.talent5) {
                this.talents.push(person.talent5);
            }
            if (person.need1) {
                this.needs.push(person.need1);
            }
            if (person.need2) {
                this.needs.push(person.need2);
            }
            if (person.need3) {
                this.needs.push(person.need3);
            }
            if (person.need4) {
                this.needs.push(person.need4);
            }
            if (person.need5) {
                this.needs.push(person.need5);
            }
        }
        nc.addNeighbor = function (person) {
            debugger;
            var human = new nc.Neighbor(person);
            debugger;
           nc.neighbors.push(human);
            // nc.moNeighbors = ns.neighbors

        }


    });