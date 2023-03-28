//Write a program that finds the sum of all numbers in the range 1 to 100 that are divisible by 3:
let add = 0;
for(let i=1; i<=100; i+=1){
  if(i % 3 === 0){
    add += i;
  }
}
console.log(add);

