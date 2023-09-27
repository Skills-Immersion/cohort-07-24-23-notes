// in import syntax, this would be
// import express from 'express';
const express = require('express');
const app = express();

// middleware and routes go here, in between creating the app variable and exporting it

// this line makes it so we can access the body in POST/PUT/PATCH requests
// if we do not have this line, the request body will be empty and we will be sad
app.use(express.json())

// I want this non-responsive middleware to run on EVERY request, so, no path
app.use((req, res, next) => {
  // non-responsive middleware: does some work and then moves on to the next piece of middleware
  console.log(`a request came in! ${req.path}`)
  next();
})

// for each route, the syntax is basically
// what HTTP method? GET
// what path? '/'
// what to do/what to send in the response?
app.get('/', (req, res, next) => {
  // responsive middleware: it sends a response
  res.send('this is the root route of our dinosaurs app! we LOVE dinosaurs very very much')
})


const dinosaurs = require('./data/dinosaurs');

// list route: get all the dinosaurs
app.get('/dinosaurs', (req, res, next) => {
  // this object with a key of data is what you'll see in the modules
  // it's what the JSON:API specification asks for
  res.send({ data: dinosaurs })
})

// function validateBignessInRequestBody(req, res, next) {
//   if (req.body.data.bigness) {
//     next();
//   } else {
//     res.status(400).send('request body must include bigness');
//   }
// }

// function validateCoolnessInRequestBody(req, res, next) {
//   if (req.body.data.coolness) {
//     next();
//   } else {
//     res.status(400).send('request body must include coolness');
//   }
// }

// make a function that returns a function to validate a specific property
function validatorFor(property) {
  return function (req, res, next) {
    if (req.body.data[property]) {
      next();
    } else {
      res.status(400).send(`request body must include ${property}`);
    }
  }
}

let nextId = 6;
// create route: create one new dinosaur
app.post('/dinosaurs',
  // validatorFor('bigness'),
  // validatorFor('coolness'),
  // validatorFor('name'),
  ...['bigness', 'coolness', 'name'].map(validatorFor),
  (req, res, next) => {
    // get all the data from the request body about this new dinosaur
    let newDino = {
      name: req.body.data.name,
      coolness: req.body.data.coolness,
      bigness: req.body.data.bigness
    }
    // assign an ID to the new dinosaur
    newDino.id = nextId;
    nextId++;
    // save the new dinosaur into our data storage (our dinosaurs array)
    dinosaurs.push(newDino);
    // send a response with a 201 status code with the data of the new dinosaur
    res.status(201).send({ data: newDino });
  })

// middleware function that figures out if a dinosaur exists with that name
function checkIfDinoExists(req, res, next) {
  if (dinosaurs.some(d => d.id === Number(req.params.id))) {
    // the dino does exist! we are in good shape
    next();
  } else {
    // the dino does not exist! life is sad and we need to go into error handling
    next(`could not find a dinosaur with the id ${req.params.id}`);
  }
}

// read route: get one dinosaur by its ID
app.get('/dinosaurs/:id', checkIfDinoExists, (req, res, next) => {
  // dino route param should contain the name of a dinosaur
  // send back the info about that dinosaur from our array
  const dinosaur = dinosaurs.find(d => d.id === Number(req.params.id));
  res.send({ data: dinosaur });
})

// this is an error handler middleware
// because it has 4 params
app.use((error, req, res, next) => {
  console.log(error);
  res.send(error);
})

// in import syntax, this would be
// export default app;
module.exports = app;
