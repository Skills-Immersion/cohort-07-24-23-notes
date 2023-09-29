// define handler functions and interact with the data storage
const { createId } = require('@paralleldrive/cuid2')
const { starches } = require('../data');
const validatorFor = require('../utils/validatorFor.js');

function list(req, res, next) {
  res.send({ data: starches })
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
  let newStarch = {
    id: createId(),
    name: req.body.data.name,
  }
  // save it into the noodles array
  starches.push(newStarch);
  // send back a 201 status code w/ the new noodle
  res.status(201).json({ data: newStarch })
}

function validateStarchExists(req, res, next) {
  const { starchId } = req.params;
  const starch = starches.find(s => s.id === starchId);
  if (starch) {
    next();
  } else {
    next({
      status: 404,
      message: `could not find starch with id ${starchId}`
    })
  }
}

function read(req, res, next) {
  const { starchId } = req.params;
  const starch = starches.find(s => s.id === starchId);
  res.send({ data: starch })
}

function destroy(req, res, next) {
  // figure out where the noodle is in the array
  const { starchId } = req.params;
  const index = starches.findIndex(s => s.id === starchId);
  // remove the noodle from the array
  starches.splice(index, 1);
  // send a 204 response
  res.status(204).send();
}

module.exports = {
  list,
  create: [
    validateBodyExists,
    validatorFor('name'),
    create
  ],
  read: [validateStarchExists, read],
  destroy: [validateStarchExists, destroy]
}
