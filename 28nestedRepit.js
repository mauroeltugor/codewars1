//Find the number that is repeated the most times in an array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 3, 3, 3];
let count = 0;
let maxCount = 0;
let mode;

for (let i = 0; i < numbers.length; i += 1) {
  count = 0;

  for (let index = i + 1; index < numbers.length; index += 1) {
    if (numbers[index] == numbers[i]) {
      count += 1;
    }
  }

  if (count > maxCount) {
    maxCount = count;
    mode = numbers[i];
  }
}
console.log(mode);
