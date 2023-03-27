//Multiply the elements of two arrays

const array1 = [22, 36, 53, 1, 15];
const array2 = [4, 15, 16];
const result = [];

for (let i = 0; i < array1.length; i += 1) {
  for (let index = 0; index < array2.length; index += 1) {
    result.push(array1[i] * array2[index]);
  }
}

console.log(result);