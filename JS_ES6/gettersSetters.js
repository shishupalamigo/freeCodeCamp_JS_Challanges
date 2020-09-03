//CHALLENGE

// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

// Now create a getter and a setter in the class, to obtain the temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.



//SOLUTION
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5 / 9 * ( this._fahrenheit - 32);
  }
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9) / 5 + 32
  }
  
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);