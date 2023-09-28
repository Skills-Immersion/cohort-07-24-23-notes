// router files match specific paths to specific handler functions
const express = require('express');
const controller = require('./noodles.controller');
const router = express.Router();

// syntax from this morning
// router.get('/', controller.list);
// new syntax, does same thing
router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:noodleId')
  .get(controller.read)
  .delete(controller.destroy);

module.exports = router;


// option 1: add in a read route
// option 2: add in a destroy route
// option 3: build a react frontend