//sumOfLowest Create a function that returns the sum of the two lowest positive numbers.

const number = [10, 34344, 5353, 3453445, 5354, 2, 4535, 33453];

let subtraction;

number.sort((a,b) => a - b)

console.log(number);

subtraction = number[1] - number[0];

console.log(subtraction);



// let max1 = number[0];
// let min1;
// for (let i = 0; i < number.length; i += 1) {
//     if (number[i] < max1) {
//         max1 = number[i];
//     }
// }

// console.log(max1);

// for (let i = 0; i < number.length; i += 1) {
//     if (number[i] < min1 && number[i] > max1) {
//         min2 = number[i];
//     }
// }

// console.log(min1);

