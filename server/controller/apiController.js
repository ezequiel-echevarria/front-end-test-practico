const statusService = require('../services/statusService');

exports.status = (req, res, next) => {
  const responsePayload = statusService.getStatus();
  res.json(responsePayload);
}