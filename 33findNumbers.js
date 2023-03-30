//select a number and check if it is in an array

const numbers = [1, 2, 3, 4, 5];


const findNumber = 3;
if (numbers.includes(findNumber)) {
  console.log(`${findNumber} is in the array`);
} else {
  console.log(`${findNumber} is not in the array`);
}

let finded = false;
for (let i = 0; i < numbers.length; i+=1) {
  if (numbers[i] === findNumber) {
    finded = true;
  }
}
if (finded) {
  console.log(`${findNumber} is in the array`);
} else {
  console.log(`${findNumber} is not in the array`);
}
