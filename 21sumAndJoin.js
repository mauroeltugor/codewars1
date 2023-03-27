//order and join two arrangements into one

let array1 = [1,2,5,8,9];
let array2 = [3,6,4,7];

for(let index = 0; index < array1.length; index += 1){
    array2.push(array1[index])
}

array2.sort();

console.log(array2);
//fixed commit 