const { welcome, goodbye, tell } = require("../utils/fortune-teller");

//1. The promise.resolve() and promise.reject() syntax
//2. When a function returns a promise
//3. Promise chaining

function x(){
  // return new Promise((resolve, reject)=>{
  //   // setTimeout(()=>{
  //   //   return resolve("Hi")
  //   // },1000)
  //   return resolve("hi")
  // })

  // return Promise.resolve("hi")
  // return Promise.reject("hi")
  return new Promise((resolve,reject)=>{
    return resolve("hi")
  })

}

// x()
//   .then((val)=>{
//     console.log("val is this", val)
//     return "DJ Khaled"
//   })
//   .then((anotherOne)=>{
//     console.log("anotherOne is this", anotherOne)
//     return [3,6,9]
//   })
//   .then((obiWankanobie)=>{
//     console.log("obiWankanobie is this", obiWankanobie)
//   })
//   .catch((err)=>{
//     console.log("err is this", err)
//   })



const promise = welcome();

// console.log(promise);
const tellPromise = tell();

console.log(tellPromise)


const z = [1,2,3]
const y = [4,5,6]
const str = "hello"

// z.push(y)
// console.log(z)
// const combined = [...z,...y]

const combined = z.concat(y)
console.log(combined)
