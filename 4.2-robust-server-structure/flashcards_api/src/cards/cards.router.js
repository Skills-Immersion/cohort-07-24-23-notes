// the router file does the job of assigning each path to its route handler
// (the route handlers will be defined in the controller file)

const express = require('express');
const router = express.Router();

const controller = require('./cards.controller');

router.get('/', controller.list);
router.post('/', controller.create);

router.get('/:cardId', controller.read);
router.delete('/:cardId', controller.destroy);

module.exports = router;