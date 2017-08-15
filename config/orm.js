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
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // * `Update Table()` 
    // An example of objColVals would be {burger_name: Kuma II, devour: true}
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "updateOne " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};
// Export the ORM object in `module.exports`.
module.exports = orm;