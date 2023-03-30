//Given an array, divide the numbers it contains by two.
const numbers = [16, 22, 38, 24, 56];

const midNumbers = numbers.map((number) => number / 2 );

console.log(midNumbers);

const divNums = [];

numbers.forEach((_,i) =>{
  if(i < numbers.length-1){
    const result = numbers[i] / 2
    divNums.push(result)
  }
})

console.log(divNums);

//every findIndex 

