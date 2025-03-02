class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
  }
  
  class Electronics extends Product {
    constructor(name, price, quantity, brand, model) {
      super(name, price, quantity);
      this.brand = brand;
      this.model = model;
    }
  
    powerOn() {
      console.log(`${this.name} powered on.`);
    }
  
    powerOff() {
      console.log(`${this.name} powered off.`);
    }
  }
  
  class Clothing extends Product {
    constructor(name, price, quantity, size, color) {
      super(name, price, quantity);
      this.size = size;
      this.color = color;
    }
  
    changeColor(newColor) {
      this.color = newColor;
      console.log(`${this.name} color changed to ${this.color}`);
    }
  }
  
  class Books extends Product {
    constructor(name, price, quantity, author, genre) {
      super(name, price, quantity);
      this.author = author;
      this.genre = genre;
    }
  
    read() {
      console.log(`Reading ${this.name} by ${this.author}`);
    }
  }
  