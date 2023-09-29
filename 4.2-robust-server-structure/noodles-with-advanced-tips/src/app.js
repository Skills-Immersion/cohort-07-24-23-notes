// app.js is for general app configuration and app-level middleware
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const noodleRouter = require('./noodles/noodles.router');
const starchRouter = require('./starches/starches.router')
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// nice stuff here

// root route
app.get('/', (req, res, next) => {
  res.send('welcome to the pasta app, it is delicious here')
})
// noodles router
app.use('/noodles', noodleRouter);
app.use('/starches', starchRouter);

// 404 handler
// app.use that matches every route - that way, if no other routes have matched/sent back data,
// we go into 404 error handling
app.use((req, res, next) => {
  next({
    status: 404,
    message: `cannot make a ${req.method} request to ${req.originalUrl}`
  })
})

// borrowed from dinosaur app
// this is an error handler middleware
// because it has 4 params
app.use((error, req, res, next) => {
  // our error contains a status code (number) and a message (string)
  let { status = 500, message = 'Internal Server Error' } = error;
  console.log(error);
  res.status(status).send({ error: message });
})

module.exports = app;
