// router files match specific paths to specific handler functions
const express = require('express');
const controller = require('./starches.controller');
const noodleRouter = require('../noodles/noodles.router')
const methodNotAllowed = require('../middleware/methodNotAllowed');
const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router.route('/:starchId')
  .get(controller.read)
  .delete(controller.destroy)
  .all(methodNotAllowed);

// option 1 for nested routes: write the nested route explicitly
// router.route('/:starchId/noodles')
//   .get(controller.listNoodles)
//   .all(methodNotAllowed);

// option 2: nest the entire noodles router inside of the starches router
router.use('/:starchId/noodles',
  controller.validateStarchExists,
  noodleRouter);

module.exports = router;
