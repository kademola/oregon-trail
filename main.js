class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    // Increases the traveler's food by 2
    return (this.food += 2);
  }

  eat() {
    if (this.food <= 0) {
      this.isHealthy = false;
    }
    return this.food--;
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passenger = [];
  }

  getAvailableSeatCount() {
    let availableSeat = this.capacity - this.passenger.length;
    return availableSeat;
  }

  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      return this.passenger.push(traveler);
    }
    return "Wagon at Maximum Capacity";
  }

  shouldQuarantine() {
    if ((this.isHealthy = true)) {
      return true;
    }
    return false;
  }

  totalFood() {
    let totalFood = 0;
    for (let x = 0; x < this.passenger.length; x++) {
      totalFood += this.passenger[x].food;
      return totalFood;
    }
  }
}
