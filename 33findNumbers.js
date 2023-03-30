//select a number and check if it is in an array

// Generando un arreglo de números
const numeros = [1, 2, 3, 4, 5];

// Verificando si un número en particular está presente en el arreglo usando el método includes()
const numeroBuscado = 3;
if (numeros.includes(numeroBuscado)) {
  console.log(`${numeroBuscado} está presente en el arreglo`);
} else {
  console.log(`${numeroBuscado} no está presente en el arreglo`);
}

// Verificando si un número en particular está presente en el arreglo usando un ciclo for
let encontrado = false;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroBuscado) {
    encontrado = true;
    break;
  }
}
if (encontrado) {
  console.log(`${numeroBuscado} está presente en el arreglo`);
} else {
  console.log(`${numeroBuscado} no está presente en el arreglo`);
}
