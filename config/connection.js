//dependencies
var mysql = require('mysql');

// code to connect Node to MySQL
var connection;
// Connect to JAWS_DB if on Heroku, or a local MySQL instance if not
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

//Export the connection.
connection.connect();

module.exports = connection;