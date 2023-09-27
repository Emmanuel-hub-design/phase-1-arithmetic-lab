let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;
console.log(multiply);
// Write your code here
var random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) +1;

var num3 = 20; // Replace with your desired value for num3
var num4 = 4;  // Replace with your desired value for num4
var mod = (num3 % num4) + 4;
console.log(mod);

// Define an array of numbers
var numbers = [5, 10, 15, 20, 8, 3];

// Initialize max with the first number in the array
var max = numbers[0];

// Loop through the array to find the maximum value
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); // Output will be 20