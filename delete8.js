//delete the odd numbers from an array

const numbers = [14, 62, 33, 4, 75, 19, 27, 84, 69, 10];

let oddNumbers = numbers.filter((number1) =>{
  return number1 % 2 === 0;
});

console.log(oddNumbers); 

