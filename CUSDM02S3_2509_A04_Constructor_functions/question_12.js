function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    describeCar() {
      return `This car is a ${year} ${make} ${model}.`;
    },
  };
}

const car = createCar("Toyota", "Camry", 2022);
console.log(car.describeCar());
