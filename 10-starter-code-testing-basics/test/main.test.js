const {getLowRatedArtists, getAverageRating} = require("../src/main");
const expect = require("chai").expect;

const artists = [
  { name: "Taylor Swift", rating: 9 },
  { name: "Drake", rating: 9.8 },
  { name: "J Cole", rating: 8 },
  { name: "Rob", rating: 6.25 },
  { name: "Kendrick Lamar", rating: 8.5 },
  { name: "Beatles", rating: 10 },
  {
      name: "Random guy from beach who asked people to follow his sound cloud",
      rating: 7,
  },
];

describe("getAverageRating()",()=>{
  //happy path- getAverageRating actually gives back correct rating as a number
  it("getAverageRating actually gives back correct rating as a number", ()=>{
    //call the function with a dataset
    const actual = getAverageRating(artists)
    //assert that the functions output will equal our expected output (8.36)
    expect(actual).to.be.a("number")
    expect(actual).to.equal(8.36)
  })

  //edge case- getAverageRating should return null if there are no elements in the given array
  it("getAverageRating should return null if there are no elements in the input array",()=>{
    //call the function and store its output in a variable called actual
    const actual = getAverageRating([]);
    //assert the actual with expected
    expect(actual).to.equal(null)
  })

  // //the output should be a number data type
  // it("the output should be a number data type", ()=>{
  //   const actual = getAverageRating(artists);

  //   expect(actual).to.be.a("number")
  //   // expect([]).to.be.a("array")
  // })
})

describe("getLowRatedArtists()",()=>{
  //that it gives back an array with artists who have rating lower than the given input rating
  it("it gives back an array with artists who have rating lower than the given input rating",()=>{
    const actual = getLowRatedArtists(artists,8);
    const expected = [
      { name: "Rob", rating: 6.25 },
      {
        name: "Random guy from beach who asked people to follow his sound cloud",
        rating: 7,
      },
    ]
    //assertion
    expect(actual).to.eql(expected)

  })

  //it returns null if no artists in the input dataset
  it("it returns null if no artists in the input dataset", ()=>{
    const actual = getLowRatedArtists([]);
    // expect(actual).to.equal(null)
    expect(actual).to.be.null;

  })
})

