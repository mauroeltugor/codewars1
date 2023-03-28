// Add the elements of a dimensional . (sum)

const array = [  [12, 32, 53],[4, 75, 86],[75, 18, 10]];

let sum = 0; //accumulator

//console.log(array.length);

for (let i = 0; i < array.length; i += 1) {
  for (let index = 0; index < array[i].length; index += 1) {
    sum += array[i][index];
  }
}

console.log(sum);