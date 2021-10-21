const Vihicle = require("./vihicle");

class PassengersCar extends Vihicle{
constructor(carBrand, mileage, passengers){
    super(carBrand, mileage);
    this.passengers  = passengers;
}
getPassengers(){
    return this.passengers;
}
toString(){
    return `The car '${this.carBrand}' has mileage '${this.mileage}'`
}
}
module.exports = PassengersCar;