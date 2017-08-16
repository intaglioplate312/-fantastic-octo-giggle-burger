// dependencies
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8080;
var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// create application/json parser allows Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');
app.use("/", routes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});