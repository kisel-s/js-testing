const Vihicle = require("./vihicle");

class Truck extends Vihicle{
constructor(carBrand, mileage, capasity){
    super(carBrand, mileage);
    this.capasity  = capasity;
}
getCapasity(){
    return this.capasity;
}
}
module.exports = Truck;