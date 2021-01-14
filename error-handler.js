function errorHandler(error, req, res, next) {
  const response = { message: error.message };
  return res.status(500).json(response);
};

module.exports = errorHandler;