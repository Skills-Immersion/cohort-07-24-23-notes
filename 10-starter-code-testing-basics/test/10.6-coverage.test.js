const assignGrade = require("../src/10.6-coverage");
const expect = require("chai").expect; //import the assertion tool from chai

describe("assignGrade()", ()=>{
  //should return back the correct letter grade given a numerical input
  it("should return back the correct letter grade given a numerical input", ()=>{
    const actual1 = assignGrade(0.75);
    const expected1 = "C"

    const actual2 = assignGrade(0.95);
    const expected2 = "A"

    const actual3 = assignGrade(0.85);
    const expected3 = "B"
    expect(actual1).to.equal(expected1);
    expect(actual2).to.equal(expected2);
    expect(actual3).to.equal(expected3);
  })
})