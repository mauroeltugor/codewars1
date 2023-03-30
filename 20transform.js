//return negative array
let numbers =[1,5,8,3,5,8,2,3];
let doubleNumbers = [];
let multi;


for(i = 0 ; i < numbers.length;i += 1){
    multi = numbers[i] - numbers[i]*2;
    doubleNumbers.push(multi)
}

console.log(doubleNumbers);

//read