// define handler functions and interact with the data storage
const { createId } = require('@paralleldrive/cuid2')
const noodles = require('../data/noodles.js');
const validatorFor = require('../utils/validatorFor.js');

function list(req, res, next) {
  res.send({ data: noodles })
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

function validateNoodleExists(req, res, next) {
  const { noodleId } = req.params;
  const noodleWeAreLookingFor = noodles.find(n => n.id === noodleId);
  if (noodleWeAreLookingFor) {
    next();
  } else {
    next({
      status: 404,
      message: `could not find noodle with id ${noodleId}`
    })
  }
}

function read(req, res, next) {
  const { noodleId } = req.params;
  const noodleWeAreLookingFor = noodles.find(n => n.id === noodleId);
  res.send({ data: noodleWeAreLookingFor })
}

function destroy(req, res, next) {
  // figure out where the noodle is in the array
  const { noodleId } = req.params;
  const index = noodles.findIndex(n => n.id === noodleId);
  // remove the noodle from the array
  noodles.splice(index, 1);
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
