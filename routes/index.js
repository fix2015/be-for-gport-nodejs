var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Place.findAll({
    include: [
      {model: models.Room, include: [
        {model: models.Price}
      ]}]
  }).then(function(places) {
    res.render('index', {
      title: 'Sequelize: Express Example',
      places: places
    });
  });
});

module.exports = router;
