const nums = [1, 2, 3, 4, 5];
const sum = (a, b) => a + b;
const sumNums = [];


nums.forEach((_,i) =>{
  if(i < nums.length-1){
    const result = sum(nums[i], nums[i+1])
    sumNums.push(result)
  }
})

// console.log(sumNums);

for (i = 0; i < nums.length-1; i += 1){
  let result = sum(nums[i],nums[i + 1] );
  sumNums.push(result)
}

console.log(sumNums);