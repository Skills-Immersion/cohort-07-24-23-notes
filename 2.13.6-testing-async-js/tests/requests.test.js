const axios = require("axios");
const { index, create } = require("../src/requests");
const BASE_URL = "http://localhost:5000";

describe("requests.js", () => {
  describe("index()", () => {
    const mockData = [
      {
        id: "HwLvy2S",
        name: "Ursa Minor",
        meaning: "Little Bear",
        starsWithPlanets: 6,
        quadrant: "NQ3",
      },
      {
        id: "dFBbdkr",
        name: "Vela",
        meaning: "Sails",
        starsWithPlanets: 7,
        quadrant: "SQ2",
      },
      {
        id: "dFBfdr",
        name: "Moon",
        meaning: "Sails",
        starsWithPlanets: 17,
        quadrant: "SQ3",
      },
    ];

    beforeEach(() => {
      jest.spyOn(axios, "get");
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a GET request to the appropriate URL", async () => {
      //jest.spyOn(axios,get) means -> tell Jest to monitor the activity of any axios.get calls
      // jest.spyOn(axios, "get");

      await index();
      
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.get).toHaveBeenCalledWith(expectedURL);


      // jest.clearAllMocks();
      // expect(1).toBe(2);
    });

    it("should return a list of constellations with fewer than 10 stars with planets", async () => {
      //jest.spyOn(axios,get) means -> tell Jest to monitor the activity of any axios.get calls
      // jest.spyOn(axios, "get");

      //axios.get.mockImplementaion means - instead of working with the actual implementation of axios.get on our api and instead of working with the actual real-time data from api (which can always be changing), have the axios.get call to resolve our fake mock data so that we can test according to the fake mock data instead
      axios.get.mockImplementation(() => Promise.resolve({ data: mockData, status: 200 }));

      const response = await index();

      const expected = mockData.slice(0, 2);
      expect(response).toEqual(expected);

      // jest.clearAllMocks();
    });

    it("should log an error to the console", async () => {
      // Write code here
      //jest.spyOn(axios,get) means -> tell Jest to monitor the activity of any axios.get calls
      // jest.spyOn(axios, "get");

      //axios.get.mockImplementaion means - instead of working with the actual implementation of axios.get on our api and instead of working with the actual real-time data from api (which can always be changing), have the axios.get call to resolve our fake mock data so that we can test according to the fake mock data instead
      axios.get.mockImplementation(() => Promise.reject({message: "Api is down"}));

      //spy on console.error that it is called with the error message
      jest.spyOn(console, "error");

      const response = await index();

      expect(console.error).toHaveBeenCalledWith("Api is down")

      // jest.clearAllMocks();
    });
  });

  describe("create()", () => {
    const body = {
      name: "Chin Yong",
      score: 76
    };
    
    // You can use this student data in your tests
    const student = { ...body, id: "abc-def" };

    beforeEach(() => {
      jest.spyOn(axios, 'post');
    });
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should make a POST request to the appropriate URL", async () => {
      //jest.spyOn(axios,get) means -> tell Jest to monitor the activity of any axios.get calls
      // jest.spyOn(axios, "post");

      await create(body);
      
      const expectedURL = `${BASE_URL}/constellations`;
      expect(axios.post).toHaveBeenCalledWith(expectedURL,body);


      jest.clearAllMocks();
      // expect(1).toBe(2);
    });

    // it("should return a list of constellations with fewer than 10 stars with planets", async () => {
    //   //jest.spyOn(axios,get) means -> tell Jest to monitor the activity of any axios.get calls
    //   jest.spyOn(axios, "get");

    //   //axios.get.mockImplementaion means - instead of working with the actual implementation of axios.get on our api and instead of working with the actual real-time data from api (which can always be changing), have the axios.get call to resolve our fake mock data so that we can test according to the fake mock data instead
    //   axios.get.mockImplementation(() => Promise.resolve({ data: mockData, status: 200 }));

    //   const response = await index();

    //   const expected = mockData.slice(0, 2);
    //   expect(response).toEqual(expected);

    //   jest.clearAllMocks();
    // });

    // it("should log an error to the console", async () => {
    //   // Write code here
    //   //jest.spyOn(axios,get) means -> tell Jest to monitor the activity of any axios.get calls
    //   jest.spyOn(axios, "get");

    //   //axios.get.mockImplementaion means - instead of working with the actual implementation of axios.get on our api and instead of working with the actual real-time data from api (which can always be changing), have the axios.get call to resolve our fake mock data so that we can test according to the fake mock data instead
    //   axios.get.mockImplementation(() => Promise.reject({message: "Api is down"}));

    //   //spy on console.error that it is called with the error message
    //   jest.spyOn(console, "error");
      
    //   const response = await index();

    //   expect(console.error).toHaveBeenCalledWith("Api is down")

    //   jest.clearAllMocks();
    // });
  });
});
