const itemsService = require('../services/itemsService');

exports.search = (req, res, next) => {
    if (!req.query.q) {
        res.status(400).json({
            status: 400,
            message: "Query Invalid"
        })
        return;
    }


    itemsService.search(req.query.q).then((responsePayload) => res.json(responsePayload));
}

exports.getDetails = (req, res, next) => {
    console.log(req.params.id);
    if (!req.params.id) {
        res.status(400).json({
            status: 400,
            message: "Id Invalid"
        })
        return;
    }

    itemsService.getDetails(req.params.id).then((responsePayload) => {
        res.json(responsePayload);
    });
}