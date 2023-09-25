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
  res.send(`today is ${new Date()}`)
})


// in import syntax, this would be
// export default app;
module.exports = app;
