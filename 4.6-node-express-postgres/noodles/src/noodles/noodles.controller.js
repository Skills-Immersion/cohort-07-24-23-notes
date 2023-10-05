// define handler functions and interact with the data storage
const { createId } = require('@paralleldrive/cuid2')
const { noodles, starches } = require('../data');
const validatorFor = require('../middleware/validatorFor.js');

const knex = require('../db/connection');

function list(req, res, next) {

  // not a nested route: send all the noodles
  // res.send({ data: noodles })
  // NEW! EXCITING! Get the noodle data from the database
  knex('noodles')
    .select('*')
    .then(data => {
      console.log('data from the database!', data)
      res.send({ data: data })
    })
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
    starchId: req.body.data.starchId,
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
  // grab the noodle by the id that is in the req params
  knex('noodles')
    .select('*')
    .where('id', req.params.noodleId)
    .then(noodles => res.send({ data: noodles[0] }))

}

function update(req, res, next) {
  // 2 good options for doing an update:
  // *** modify the existing object using the request body
  // (commented out) create a new object and replace it in the array
  let { noodle, noodleIndex } = res.locals;
  noodle.title = req.body.data.title;
  noodle.starchId = req.body.data.starchId;
  noodle.recommendations = req.body.data.recommendations;
  // let updatedNoodle = {
  //   ...noodle,
  //   title: req.body.data.title,
  //   starchId: req.body.data.starchId,
  //   recommendations: req.body.data.recommendations
  // };
  // noodles.splice(noodleIndex, 1, updatedNoodle)
  // send back the modified noodle
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
    validatorFor('starchId'),
    validatorFor('recommendations'),
    create
  ],
  read: [read],
  update: [
    validateNoodleExists,
    validateBodyExists,
    validatorFor('title'),
    validatorFor('starchId'),
    validatorFor('recommendations'),
    update
  ],
  destroy: [validateNoodleExists, destroy]
}
