//given an array with numbers in order separate the even and odd into different arrays

let numbers = [1,2,3,4,5,6,7,8,9];
let odd = [];
let even = [];

for(i= 1; i<= numbers.length; i += 2){
    odd.push(i);
}

for(i= 2; i<= numbers.length-1; i += 2){
    even.push(i);
}

console.log(numbers);
console.log(odd);
console.log(even);