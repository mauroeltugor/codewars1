//Separate odd and even numbers into different arrays.

const numbers = [5, 3, 8, 4, 2];
const evenNumbers = [];
const oddNumbers = [];
let type = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    type = numbers[i];
    evenNumbers.push(type)
  }else{
    type = numbers[i];
    oddNumbers.push(type)
  }
}

console.log(`The list of numbers is ${numbers} The even numbers are ${evenNumbers} and the odd numbers are ${oddNumbers}`);