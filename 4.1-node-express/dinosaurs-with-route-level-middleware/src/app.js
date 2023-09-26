// in import syntax, this would be
// import express from 'express';
const express = require('express');
const app = express();

// middleware and routes go here, in between creating the app variable and exporting it

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

// a route to send back the current date and time
app.get('/whatdayisit', (req, res, next) => {
  // send back what day it is
  let day = new Date();
  res.send(`today is ${dayy}`)
})

// a route to be greeted by a dinosaur
// this route will use a query parameter
// with a key of "dino" to represent
// the type of dino saying rawr
app.get('/greeting', (req, res, next) => {
  // query params are always inside of req.query
  // req.query is an object that contains the key/value pairs from the request
  // since the query params are optional, it is good behavior to put in default values, like 'dinosaur' and 'rawr'
  if (!req.query.dino) {
    // next with an argument goes into error handling
    return next('You must include a dino query param')
  }
  const { dino = 'dinosaur', whatTheDinoSays = 'rawr' } = req.query;
  res.send(`the ${dino} says "${whatTheDinoSays}"`)
})

// if this comes after the route below,
// then it will never happen
// and the trex will be angry that you invalidated it and it will eat you
app.get('/is-dinosaur/trex', (req, res, next) => {
  res.send('yes of course a trex is a dinosaur, please dont eat me')
})

const dinosaurs = require('./data/dinosaurs');

app.get('/is-dinosaur/:maybeDino', (req, res, next) => {
  // since maybeDino is a route param, it will be inside of req.params
  // a dinosaur name represents a dinosaur if there is a dinosaur with that name in our array of dinosaurs
  // how to check if there is a dinosaur with that name in the array??
  // could use a loop! for each dinosaur, check if it has the same name
  // could use a filter! filter down to just dinosaurs with that name, and then check if there are any dinosaurs left
  // could use some! check if there is a dinosaur that has that name
  // could use find or findIndex! get back the dinosaur with that name

  // using some... if there is some dinosaur whose name matches the param
  if (dinosaurs.some(d => d.name.toLowerCase() === req.params.maybeDino.toLowerCase())) {
    res.send(`yes, ${req.params.maybeDino} is a dinosaur`)
  } else {
    res.send(`no, ${req.params.maybeDino} is not a dinosaur`)
  }
})

app.get('/dinosaurs/:dino', (req, res, next) => {
  // dino route param should contain the name of a dinosaur
  // send back the info about that dinosaur from our array
  const dinosaur = dinosaurs.find(d => d.name.toLowerCase() === req.params.dino.toLowerCase());
  if (dinosaur) {
    res.send(dinosaur);
  } else {
    next(`could not find a dinosaur with the name ${req.params.dino}`)
  }
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
