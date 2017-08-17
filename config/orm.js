// Require NPM package and connections info.
var mysql = require('mysql');
var connection = require('./connection.js');

//These are the methods you will need to use in order to retrieve and store data in your database.
module.exports = {
    // selectAll Method
    selectAll: function(table, orderBy, direction, callback) {
        var queryString = 'SELECT * FROM ?? ORDER BY ??;';
        connection.query(queryString, [table, orderBy, direction], function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    },
    // insertOne Method
    insertOne: function(table, columns, values, callback) {
        var queryString = 'INSERT INTO ' + table + columns + ' VALUES (' + values + ')';
        connection.query(queryString, function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    },
    // updateOne Method
    updateOne: function(table, properties, selector, callback) {
        var queryString = 'UPDATE ' + table + ' SET ' + properties + ' WHERE ' + selector;
        connection.query(queryString, function(err, data) {
            if (err) {
                return console.log(err);
            } else {
                return callback(data);
            }
        });
    }
};