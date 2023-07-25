/* 
- Reference error
    - Example of variable not defined
    - Example of variable out of scope
    - Example of calling the wrong function name

 - Syntax error
    - Misspelling of javascript keyword/loops, braces incomplete
 - Type error
    - Using something the wrong way (array.length vs length())
*/


let topArtists = [
  {name: "Drake", rating: 10}, //0 
  {name: "Taylor Swift", rating: 10},//1
  {name: "J Cole", rating: 8},//2
  {name: "Kendrick Lamar", rating: 9},//3
  {name: "Beatles", rating: 10}//4
]

let newArtists = [
  {name: "Lil yachty", rating: 8}, //0 
  {name: "Jelly Roll", rating: 9}, //1
]

// console.log(topArtists)

//Math.random() => gives random num from 0-1 (ex: 0.5, 0.72) * array.length

function getRandomArtist(artists) { // parameter -> the variable that will store the given argument
  let randomNum = Math.floor(Math.random()*artists.length)
  let randomArtist = artists[randomNum];
  return randomArtist
}

// console.log(randomNum)
console.log(getRandomArtist(topArtists)) //argument -> the data you provide to the function when calling the function
console.log(getRandomArtist(newArtists)) //argument -> the data you provide to the function when calling the function



// for(let i = 0; i<10; i++){
//   console.log(i)
console.log(newArtists())