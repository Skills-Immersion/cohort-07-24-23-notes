// router files match specific paths to specific handler functions
const express = require('express');
const controller = require('./starches.controller');
const router = express.Router();

router.route('/')
  .get(controller.list)
  .post(controller.create);

router.route('/:starchId')
  .get(controller.read)
  .delete(controller.destroy);

module.exports = router;
