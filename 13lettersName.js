//print names start with m
let names = ['Emma','Liam','Olivia','Noah','Ava','Ethan','Sophia','Logan','Isabella','Jackson','Mia','Aiden','Charlotte','Lucas','Amelia','Mason','Harper','Ethan','Abigail','Elijah'];
let mNames= [];


const namesWithM = [];
for(let i = 0; i < names.length; i++) {
  if(names[i].includes("m") || names[i].includes("M") ){
    mNames.push(names[i]);
  }
}
console.log(mNames); 