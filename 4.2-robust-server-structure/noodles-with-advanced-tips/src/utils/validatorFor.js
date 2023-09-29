// make a function that returns a function to validate a specific property
function validatorFor(property) {
  return function (req, res, next) {
    if (req.body.data[property]) {
      next();
    } else {
      next({
        status: 400,
        message: `request body must include ${property}`
      });
    }
  }
}

module.exports = validatorFor;
