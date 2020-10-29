const itemsService = require('../services/itemsService');

const handleError = (error, res) => {
    if (error.response)
        return res.status(error.response.status).json({
            status: error.response.status,
            message: error.response.statusText
        });

    return res.status(500).json({
        status: 500,
        message: 'Error Interno'
    });
}

exports.search = (req, res, next) => {
    if (!req.query.q) {
        res.status(400).json({
            status: 400,
            message: "Query Invalid"
        })
        return;
    }

    itemsService.search(req.query.q)
        .then((responsePayload) =>
            res.json(responsePayload))
        .catch(error => handleError(error, res));
}

exports.getDetails = (req, res, next) => {
    if (!req.params.id) {
        res.status(400).json({
            status: 400,
            message: "Id Invalid"
        })
        return;
    }

    itemsService.getDetails(req.params.id)
        .then((responsePayload) => {
            res.json(responsePayload);
        }).catch(error => handleError(error, res));
}