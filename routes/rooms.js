var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.post('/:room_id/price/create', function (req, res) {
    models.Price.create({
        price: req.body.price,
        price: req.body.price,
        RoomId: req.params.room_id
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:room_id/price/:price_id/destroy', function (req, res) {
    models.Price.destroy({
        where: {
            id: req.params.price_id
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;
