//given an array print the largest number
const age = [33, 61, 21, 18, 22];
let max = age[0];
for(let i = 1; i < age.length; i += 1) {
  if(age[i] > max) {
    max = age[i];
  }
}
console.log(max); 
