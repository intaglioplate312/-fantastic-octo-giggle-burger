// Object Relational Mapper (ORM)

// Import  connection.js
var connection = require("./connection.js");

// Methods you will need to use database.
var orm = {
    // Select All
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },




    //  Create new table item
    insertOne: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            console.log(result);
        });
    },

    // * `Update Table()` 
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
            console.log(result);
        });
    }
};
// Export the ORM object in `module.exports`.
module.exports = orm;