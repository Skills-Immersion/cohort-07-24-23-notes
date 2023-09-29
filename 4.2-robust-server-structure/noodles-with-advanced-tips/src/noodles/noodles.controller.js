// define handler functions and interact with the data storage
const { createId } = require('@paralleldrive/cuid2')
const noodles = require('../data/noodles.js');
const validatorFor = require('../middleware/validatorFor.js');

function list(req, res, next) {
  // option 2: nesting the entire router
  // now, this list function needs to send all the data sometimes,
  // but only one specific starch's noodles other times
  if (req.params.starchId) {
    // we're in a nested route: filter down the noodles
    let { starchId } = req.params;
    let filteredNoodles = noodles.filter(n => n.starchId === starchId);
    res.send({ data: filteredNoodles })
  } else {
    // not a nested route: send all the noodles
    res.send({ data: noodles })
  }
}

function validateBodyExists(req, res, next) {
  if (req.body.data) {
    next();
  } else {
    next({
      message: 'request.body must include data',
      status: 400
    })
  }
}

function create(req, res, next) {
  // make a new object w/ the data from the request body
  let newNoodle = {
    id: createId(),
    title: req.body.data.title,
    starch: req.body.data.starch,
    recommendations: req.body.data.recommendations
  }
  // save it into the noodles array
  noodles.push(newNoodle);
  // send back a 201 status code w/ the new noodle
  res.status(201).json({ data: newNoodle })
}

// advanced topic #1: using res.locals to pass data between middleware
function validateNoodleExists(req, res, next) {
  const { noodleId } = req.params;
  const noodleIndex = noodles.findIndex(n => n.id === noodleId);
  if (noodleIndex >= 0) {
    // save the information about the found noodle so it can be used again
    // in the route handlers
    res.locals.noodleIndex = noodleIndex;
    res.locals.noodle = noodles[noodleIndex];
    next();
  } else {
    next({
      status: 404,
      message: `could not find noodle with id ${noodleId}`
    })
  }
}

function read(req, res, next) {
  const { noodle } = res.locals;
  res.send({ data: noodle })
}

function destroy(req, res, next) {
  // figure out where the noodle is in the array
  const { noodleIndex } = res.locals;
  // remove the noodle from the array
  noodles.splice(noodleIndex, 1);
  // send a 204 response
  res.status(204).send();
}

module.exports = {
  list,
  create: [
    validateBodyExists,
    validatorFor('title'),
    validatorFor('starch'),
    validatorFor('recommendations'),
    create
  ],
  read: [validateNoodleExists, read],
  destroy: [validateNoodleExists, destroy]
}
