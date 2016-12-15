var express = require('express');
var router = express.Router();
require('dotenv').config();
var knex = require('../db/knex.js');

function validate(name, email, comment) {
  if (name.trim().length > 0 && comment.trim().length > 0 && email.indexOf('@') != -1) {
    if (name.length < 15 && comment.length < 50 && email.trim() > 0) {
      return true;
    }
  }
}


/* GET view all. */
router.get('/', function(req, res, next) {
  knex('packer')
  .then(function(data) {
    res.json(data);
  });
});

/* GET single element. */
router.get('/:id', function(req, res, next) {
  knex('packer')
  .where('id', req.params.id)
  .then(function(data) {
    res.json(data);
  });
});

/* POST new element. */
router.post('/', function(req, res, next) {
  if (validate(req.body.name, req.body.email, req.body.comment)){
    knex('packer')
    .insert(req.body)
    .then(function(data) {
      res.json(data);
    });
  }
});

router.put('/:id', function(req, res, next) {
  // if (validate(req.body.name, req.body.email, req.body.comment)) {
    console.log(req.body);
    knex('packer')
    .where('id', req.params.id)
    .update({
      name: req.body.name,
      comment: req.body.comment,
      email: req.body.email,
      date: new Date()
    })
    .returning('id')
    .then(function(id) {
      res.json(id);
    });
  // }
});

/* delete single element. */
router.delete('/:id', function(req, res, next) {
  knex('packer')
  .where('id', req.params.id)
  .del()
  .then(function() {
    res.redirect('../public/packers/');
  });
});


module.exports = router;
