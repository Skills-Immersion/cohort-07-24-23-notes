const {getLowRatedArtists, getAverageRating, partitionArtistsByRating} = require("../src/main");
// const expect = require("chai").expect;

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
    // expect(actual).to.be.a("number")
    expect(typeof actual).toEqual("number")
    expect(actual).toEqual(8.36)
  })

  //edge case- getAverageRating should return null if there are no elements in the given array
  it("getAverageRating should return null if there are no elements in the input array",()=>{
    //call the function and store its output in a variable called actual
    const actual = getAverageRating([]);
    //assert the actual with expected
    expect(actual).toEqual(null)
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
    expect(actual).toEqual(expected)

  })

  //it returns null if no artists in the input dataset
  it("it returns null if no artists in the input dataset", ()=>{
    const actual = getLowRatedArtists([]);
    // expect(actual).to.equal(null)
    expect(actual).toEqual(null)

  })
})


describe("partitionArtistsByRating()", ()=>{
  it("should partition properly. low rated artists should be in first sub array and high rated aritsts in second sub array", ()=>{
    const actual = partitionArtistsByRating(artists, 8)
    const lowRated = [
      { name: "Rob", rating: 6.25 },
      {
          name: "Random guy from beach who asked people to follow his sound cloud",
          rating: 7,
      },
    ];
    const highRated = [
      { name: "Taylor Swift", rating: 9 },
      { name: "Drake", rating: 9.8 },
      { name: "J Cole", rating: 8 },
      { name: "Kendrick Lamar", rating: 8.5 },
      { name: "Beatles", rating: 10 }
    ];

    const expected = [lowRated,highRated];

    // expect(actual).to.deep.equal(expected); //this also works for deep comparision of reference types
    expect(actual).toEqual(expected);
    // expect(typeof actual).toBe("array")
    expect(Array.isArray(actual)).toEqual(true)
  })

  it("will put all artists in first sub array if necessary", ()=>{
    const actual = partitionArtistsByRating(artists, 11)
    const expected = [artists,[]]
    expect(actual).toEqual(expected);

  })

})

