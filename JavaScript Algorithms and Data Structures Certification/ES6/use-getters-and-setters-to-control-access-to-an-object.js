/* Alter code below this line */
class Thermostat {
    constructor(temp) {
        this._temp = 5/9 * (temp - 32);
    }
    // getter
    get temperature() {
    return this._temp;
    }
    // setter
    set temperature(updatedTemp) {
    this._temp = updatedTemp;
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);