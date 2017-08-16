// Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
// Create the code that will call the ORM functions using burger specific input for the ORM.
var burgers = {
    all: function(cb) {
        orm.aselectAll("burgers", "id", "DESC", function(res) {
            cb(res);
        });
    },

    // The variables cols and vals are arrays.
    post: function(input, cb) {
        var columns = '(burger_name, devoured)';
        var values = '\'' + input + '\', false';

        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(property, selector, callback) {
        var update = 'devoured = ' + property;
        var condition = 'id = ' + selector;

        orm.updateOne("burgers", update, condition, function(res) {
            cb(res);
        });
    },
    // deleteOne: function(condition, cb) {
    //   orm.delete("burgers", condition, function(res) {
    //     cb(res);
    //   });
    // }
};

// Export at the end of the `burger.js` file.
module.exports = burgers;