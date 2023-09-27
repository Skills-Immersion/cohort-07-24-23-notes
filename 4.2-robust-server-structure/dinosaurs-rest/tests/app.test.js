const request = require('supertest');
const app = require('../src/app.js');
const dinosaurs = require('../src/data/dinosaurs.js');

// each test gets to make up its own testing data
// so, clear out the array before each test
beforeEach(() => {
  dinosaurs.splice(0, dinosaurs.length);
})

test('list route returns an empty array when there is no data', async () => {
  // since we're testing for empty data, we're not adding any data into the dinosaurs array (but we will for future tests)
  const response = await request(app).get('/dinosaurs');
  expect(response.statusCode).toEqual(200);
  expect(response.body.data).toEqual([]);
})

test('list route returns a whole array of dinosaurs when there is data', async () => {
  // 1. set up the data for testing
  let testingDinos = [
    {
      id: 12,
      name: 'pterodactyl',
      coolness: 8,
      bigness: 4
    }, {
      id: 72,
      name: 'ankylosaurus',
      coolness: 8,
      bigness: 6
    }
  ]
  dinosaurs.push(...testingDinos);
  // 2. call our code (make a request w/ supertest)
  const response = await request(app).get('/dinosaurs');
  // 3. assert/expect that our code did the right thing
  expect(response.statusCode).toEqual(200);
  expect(response.body.data).toEqual(testingDinos);
})

test('creating a dinosaur works', async () => {
  // 1. set up the data
  let newAmazingDino = {
    name: 'megalodon',
    coolness: 4,
    bigness: 10
  };
  // 2. call our code
  const response = await request(app)
    .post('/dinosaurs')
    .set('Accept', 'application/json')
    .send({ data: newAmazingDino });
  // 3. make sure it worked
  expect(response.statusCode).toEqual(201);
  expect(response.body.data).toEqual({
    id: 6,
    ...newAmazingDino
  })
})

test('creating a dinosaur with no name gives a 400 error', async () => {
  // 1. set up the data
  let newAmazingDino = {
    coolness: 4,
    bigness: 10
  };
  // 2. call our code
  const response = await request(app)
    .post('/dinosaurs')
    .set('Accept', 'application/json')
    .send({ data: newAmazingDino });
  // 3. make sure it worked
  // (in this case, "working" means it gave a 400 error and an error message)
  expect(response.statusCode).toEqual(400);
  expect(response.text).toEqual('request body must include name')
});

// test('addition is functional', () => {
//   expect(2 + 2).toEqual(4);
// });
