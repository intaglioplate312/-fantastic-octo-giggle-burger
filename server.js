// Dependencies.
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Initialize app.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));


var PORT = process.env.PORT || 8080;

// Set handlebars as view engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Method override.
app.use(methodOverride('_method'));

// Import routes and give the server access to them.
var routes = require('./controllers/burger_controller.js');
app.use('/', routes);

// Start listening.
app.listen(PORT);