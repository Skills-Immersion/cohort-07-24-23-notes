// router files match specific paths to specific handler functions
const express = require('express');
const controller = require('./noodles.controller');
const methodNotAllowed = require('../middleware/methodNotAllowed');
// option 2: nesting the entire router
// because we are nesting this router inside of the starches router,
// we need mergeParams so we can access the route params
// from the starches router
const router = express.Router({ mergeParams: true });

// syntax from this morning
// router.get('/', controller.list);
// new syntax, does same thing
router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

// router.route('/potato')
//   .all((req, res, next) => res.send('this is the potato route'));

router.route('/:noodleId')
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed);

module.exports = router;
