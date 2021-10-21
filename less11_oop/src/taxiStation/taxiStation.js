class TaxiStation {
    constructor(needTrucks = false) {
        this.passengersCarsPool = [];
        if (needTrucks) {
            this.trucksPool = [];
        }
    }

    addCarsPool(cars) {
        this.passengersCarsPool= [...this.passengersCarsPool, ...cars]
    }

    addTrucksPool(truck) {
        if (truck.trucksPool) {
            this.trucksPool = [...this.trucksPool, ...truck]
        }
        else {
            console.log('No truck need');
        }
    }

    passengersFilter(passengers){
        return this.passengersCarsPool.find((car) => car.getPassengers() >= passengers);

    }
}

module.exports = TaxiStation;