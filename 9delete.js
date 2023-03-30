//dmove the even numbers from an array to another array

const numbers = [14, 62, 33, 4, 75, 19, 27, 84, 69, 10];

// let evenNumbers = numbers.filter((number1) =>{
//   return number1 % 2 === 0;
// });

// console.log(evenNumbers); 

const hasEvenNumber = numbers.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber);
