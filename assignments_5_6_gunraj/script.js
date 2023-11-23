
// Author : Gunraj Singh Sodhi C0893229
class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
      this.outOfRace = false;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }
  
    race() {
      for (let turn = 1; turn <= 7; turn++) {
        if (!this.outOfRace) {
          this.updateGas();
        }
      }
    }
  
    updateGas() {
      const fuelConsumption = this.calculateFuelConsumption();
      this.gas -= fuelConsumption;
  
      if (this.gas <= 0) {
        this.outOfRace = true;
      }
    }
  
    calculateFuelConsumption() {
      const baseFuelConsumption = 5;
      const currentYear = new Date().getFullYear();
      let fuelConsumption = baseFuelConsumption;
  
      if (this.year !== currentYear) {
        const yearsOld = currentYear - this.year;
        fuelConsumption += yearsOld;
      }
  
      return fuelConsumption;
    }
  }
  
  // Create car instances
  const cars = [
    new Car("Honda", "CR-V", 2023, "Red", 50000, 45),
    new Car("Ford", "F-150", 2020, "Black", 25000, 30),
    new Car("BMW", "X5", 2022, "Green", 60000, 65),
    new Car("Mazda", "CX-5", 2019, "White", 15000, 60),
    new Car("Audi", "Q7", 2018, "Silver", 52000, 47),
    new Car("Kia", "Forte", 2020, "Blue", 21000, 56),
  ];
  
  // Invoke honk method for each car
  cars.forEach(car => car.honk());
  
  // Simulate the race
  cars.forEach(car => car.race());
  
  // Determine and print the winner
  const remainingFuel = cars.map(car => car.gas);
  const winnerIndex = remainingFuel.indexOf(Math.max(...remainingFuel));
  
  if (!cars[winnerIndex].outOfRace) {
    console.log(`${cars[winnerIndex].brand} ${cars[winnerIndex].model} is the winner with ${cars[winnerIndex].gas} liters of fuel remaining!`);
  } else {
    console.log("All cars are out of race.");
  }
  