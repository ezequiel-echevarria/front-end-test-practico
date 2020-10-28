const statusService = require('../services/statusService');

exports.status = function(req, res, next) {
    const responsePayload = statusService.getStatus();
  res.json(responsePayload);
}
