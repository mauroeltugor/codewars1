//Create an array and use a nested loop to print its contents:
const array = [[1,2,3], [4,5,6], [7,8,9]];
for(let i=0; i<array.length; i+=1){
  for(let index=0; index<array[i].length; index+=1){
    console.log(array[i][index]);
  }
}
