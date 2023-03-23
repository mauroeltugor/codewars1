let grade = [5.0,3.0,4.5,1.0];
const final = (a,b,c) => (a/b)*c
let exam = 100;

let copy = grade.slice()

while (grade.length > 1) {
  const operation = grade[0] + grade[1];
  grade.splice(0, 2, operation);
}

let grade1 = final(grade,copy.length,exam);


console.log(grade1);