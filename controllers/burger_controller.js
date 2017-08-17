// Import NPM dependency and Express router function.
var express = require('express');
var router = express.Router();

// Import data model.
var burger = require('../models/burger.js');


// GET route hands data to handlebars so index can be render
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});


// POST route for new burger name
router.post('/', function(req, res) {
    var name = req.body.name;
    burger.post(name, function() {
        res.redirect('/');
    });
});

// PUT route sends the id the devoured or make burger status
router.put('/:id', function(req, res) {
    var property = req.body.devoured;
    var selector = req.params.id;

    burger.update(
        property, selector,
        function() {
            res.redirect('/');
        });
});

// Export routes for server.js.
module.exports = router;