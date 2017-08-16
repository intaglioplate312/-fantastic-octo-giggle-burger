// Object Relational Mapper (ORM)

// Import  connection.js
var connection = require("./connection.js");

// Methods you will need to use resultbase.
var orm = {
    // Select All
    selectAll: function(table, orderBy, direction, cb) {
        var queryString = 'SELECT * FROM ?? ORDER BY ??;';
        connection.query(queryString, [table, orderBy, direction], function(err, result) {
            if (err) {
                return console.log(err);
            } else {
                return cb(result);
            }
        });
    },

    //  Create new table item
    insertOne: function(table, columns, values, cb) {
        var queryString = 'INSERT INTO ' + table + columns + ' VALUES (' + values + ')';
        connection.query(queryString, function(err, result) {
            if (err) {
                return console.log(err);
            } else {
                return cb(result);
            }
        });
    },

    // * `Update Table()` 
    // An example of objColVals would be {burger_name: Kuma II, devour: true}
    updateOne: function(table, properties, selector, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + properties + ' WHERE ' + selector;
        connection.query(queryString, function(err, result) {
            if (err) {
                return console.log(err);
            } else {
                return cb(result);
            }
        });
    }
};

// Export the ORM object in `module.exports`.
module.exports = orm;