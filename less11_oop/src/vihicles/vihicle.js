class Vihicle{
    constructor(carBrand, mileage){
        this.carBrand = carBrand;
        this.mileage = mileage;
    }

    addTrip(mileage){
        this.mileage = this.mileage + mileage;
    }
}

module.exports = Vihicle;