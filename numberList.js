//Creates an array with numbers 1 through 10. Displays to the console all array elements except the first and last.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i < numeros.length - 1; i+=1) {
  console.log(numeros[i]);
}

