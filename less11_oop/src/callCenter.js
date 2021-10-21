const prompt = require('prompt-promise');

let Car = require('./vihicles/passengersCar');
let Truck = require('./vihicles/truck');
let TaxiStation = require('./taxiStation/taxiStation');

let taxiStation = new TaxiStation(true);
let cars = [
    new Car('VW', 10000, 4),
    new Car('Audi', 120000, 3),
    new Car('VW', 30000, 5),
    new Car('BMW', 70000, 4),
    new Car('VW', 32000, 4),
];

let tracks = [
    new Truck('Man', 30000, 17),
    new Truck('Man', 37000, 18),
    new Truck('Renault', 90000, 15),
];

taxiStation.addCarsPool(cars);
taxiStation.addTrucksPool(tracks);

(async () => {
    const people = parseInt(await prompt('Enter number of passengers: '));
    const trip = parseInt(await prompt('Enter distance of your trip: '));
    const car = taxiStation.passengersFilter(people);
    car.addTrip(trip);
    console.log(car.toString());
    prompt.finish();
})();