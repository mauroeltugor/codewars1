//order and join two arrangements into one

let array1 = [1,2,5,8,9];
let array2 = [3,6,4,7];

for(let index = 0; index > array2.length; index += 1){
    array1.push(array2[index])
}


// array1.push(array2);



console.log(array1);