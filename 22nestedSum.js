//Create a array and use a nested loop to calculate the sum of all its elements:
const array = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
let sum = 0;
for(let i=0; i<array.length; i+=1){
  for(let index=0; index<array[i].length; index+=1){
    sum += array[i][index];
  }
}
console.log(sum);
