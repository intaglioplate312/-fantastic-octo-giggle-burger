// dependencies
var express = require("express");
var burgers = require("../models/burgers.js");

// Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burgers.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;