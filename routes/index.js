var express = require('express');
var router = express.Router();
require('dotenv').config();
var knex = require('../db/knex.js');

/* GET home page. */
router.get('/packers', function(req, res, next) {
  knex('packer')
  .then(function(data) {
    res.json(data);
  });
});

module.exports = router;
