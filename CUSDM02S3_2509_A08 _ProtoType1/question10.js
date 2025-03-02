function Car(make, model, year, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
}

function Customer(name, rentedCars = []) {
  this.name = name;
  this.rentedCars = rentedCars;
}

Customer.prototype.rentCar = function (car) {
  if (car.isAvailable) {
    car.isAvailable = false;
    this.rentedCars.push(car);
    console.log(`${this.name} rented ${car.make} ${car.model}`);
  } else {
    console.log(`${car.make} ${car.model} is already rented.`);
  }
};

function PremiumCustomer(name, rentedCars = [], discountRate) {
  Customer.call(this, name, rentedCars);
  this.discountRate = discountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype);

function calculateRentalPrice(car, days, isPremium) {
  let basePrice = 50;
  let rentalPrice = basePrice * days;

  if (car.make === "Toyota") {
    rentalPrice += 10;
  } else if (car.make === "Ford") {
    rentalPrice += 20;
  }

  if (isPremium) {
    rentalPrice -= rentalPrice * 0.1;
  }

  return rentalPrice;
}

Customer.prototype.returnCar = function (car) {
  setTimeout(() => {
    car.isAvailable = true;
    this.rentedCars = this.rentedCars.filter((c) => c !== car);
    console.log(`${this.name} returned ${car.make} ${car.model}`);
  }, 2000);
};

function Maintenance(car, delay) {
  setTimeout(() => {
    car.isAvailable = true;
    console.log(`${car.make} ${car.model} is now available after maintenance.`);
  }, delay);
}

// Create car objects
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Ford", "Mustang", 2019);
const car3 = new Car("Honda", "Civic", 2018);

// Create customers

const customer1 = new Customer("Alice");
const customer2 = new Customer("Bob");
const premiumCustomer1 = new PremiumCustomer("Charlie", [], 0.1);

// Rent cars

customer1.rentCar(car1);
customer2.rentCar(car2);
premiumCustomer1.rentCar(car3);

// Calculate rental prices

console.log(
  "Rental price for car1 (Toyota Corolla) for 3 days:",
  calculateRentalPrice(car1, 3, false)
);
console.log(
  "Rental price for car2 (Ford Mustang) for 5 days:",
  calculateRentalPrice(car2, 5, false)
);
console.log(
  "Rental price for car3 (Honda Civic) for 2 days (premium customer):",
  calculateRentalPrice(car3, 2, true)
);

// Return cars

customer1.returnCar(car1);
customer2.returnCar(car2);
premiumCustomer1.returnCar(car3);

// Maintenance

Maintenance(car1, 3000);
Maintenance(car2, 2000);
Maintenance(car3, 1000);

// Use call, apply, and bind

const customer3 = new Customer("David");
const rentCarForCustomer3 = customer1.rentCar.bind(customer3);
rentCarForCustomer3(car1);
rentCarForCustomer3(car2);

const customer4 = new Customer("Eve");
customer1.rentCar.call(customer4, car3);
customer1.rentCar.apply(customer4, [car3]);
