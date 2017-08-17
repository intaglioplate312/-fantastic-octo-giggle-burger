// dependencies
var express = require("express");
var burgers = require("../models/burgers.js");

// Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();
//GET
router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
//POST
router.post("/", function(req, res) {
    var name = req.body.name;
    burger.post(name, function() {
        res.redirect("/");
    });
});
// PUT
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