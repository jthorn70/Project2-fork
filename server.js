var express = require("express");
var db = require("./models");
var app = express();
var exphbs = require('express-handlebars');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Strategy = require('passport-local').Strategy;
require('./config/passport')(app);
// var {ensureAuthenticated} = require('./config/auth');


// Routes
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
