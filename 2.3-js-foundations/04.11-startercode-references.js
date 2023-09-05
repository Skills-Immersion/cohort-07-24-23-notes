/* 
PRIMITIVE DATA TYPES- PASSED BY VALUE:
String
Number
Boolean
Undefined
Null



REFERENCE DATA TYPES- PASSED BY REFERENCE:
Arrays
Objects


*/


// WHEN A PRIMITIVE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE GETS ITS OWN COPY
let num1 = 5;
let num2 = num1; //num2 is also set to 5,

//BUT NUM2 AND NUM1 ARE SEPARATE COPIES. SO AFFECTING NUM2 WILL NOT AFFECT NUM1 - AND VICE VERSA
num1+=10;
num2++
// console.log(num1,num2)

let x = "hi";
let y = x;

x+= "!!"
// console.log(x,y)

// WHEN A REFERENCE DATA TYPE IS ASSIGNED TO A VARIABLE, THAT VARIABLE JUST POINTS TO THAT DATA IN MEMORY (IT REFERENCES THAT DATA RATHER THAN MAKING A SEPARATE COPY)
const foods = ["calamari", "sandwich"]
const otherFoods = [foods];

foods.push("Tacos")
// console.log(foods, otherFoods)


// LETS SEE WHAT HAPPENS IN FUNCTIONS WITH PRIMITIVE TYPES AND REFERNCE TYPES
const arr = [1,2,3,4]
// const arrInput = arr
let mj = 23;

function addToend(arrInput){
  const result = arrInput
  arrInput.push(5)
}

function overRideTheGoat(num){
  num = 6;
}

overRideTheGoat(mj)
console.log("mj is this", mj)
addToend(arr);
console.log(arr)


const person1 = {
  name: "Larry David",
  show: "Curb your enthusiasm"
}

const person2 = person1; //references the same object - NOT SEPARATE COPY
const person3 = {...person1}; //person 3 is a separate copy


person2.name = "MJ"

console.log(person1, person2)