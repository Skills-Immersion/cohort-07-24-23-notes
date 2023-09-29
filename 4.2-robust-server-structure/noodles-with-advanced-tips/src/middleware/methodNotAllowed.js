function methodNotAllowed(req, res, next) {
  // just go into error handling
  next({
    status: 405,
    message: `the method ${req.method} is not allowed on the path ${req.originalUrl}`
  })
}

module.exports = methodNotAllowed;