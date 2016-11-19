var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function(req, res) {
    models.Place.create({
        title: req.body.title,
        type: req.body.type,
        folder: req.body.folder,
        distance: req.body.distance,
        phone: req.body.phone,
        address: req.body.address,
        description: req.body.description,
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:place_id/destroy', function(req, res) {
    models.Place.destroy({
        where: {
            id: req.params.place_id
        }
    }).then(function() {
        res.redirect('/');
    });
});

router.post('/:place_id/room/create', function (req, res) {
    models.Room.create({
        title: req.body.title,
        folderImg: req.body.folderImg,
        PlaceId: req.params.place_id
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:place_id/room/:task_id/destroy', function (req, res) {
    models.Room.destroy({
        where: {
            id: req.params.task_id
        }
    }).then(function() {
        res.redirect('/');
    });
});


module.exports = router;
