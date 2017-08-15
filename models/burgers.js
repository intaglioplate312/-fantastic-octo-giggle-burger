// Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
// Create the code that will call the ORM functions using burger specific input for the ORM.
var burgers = {
    selectAll: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
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